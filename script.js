document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let homeAddress = document.getElementById('homeAddress').value;
    let bloodGroup = document.getElementById('bloodGroup').value;

    let userData = {
      fullName,
      email,
      phone,
      homeAddress,
      bloodGroup
    };

    let storedData = JSON.parse(localStorage.getItem('userData')) || [];
    storedData.push(userData);
    localStorage.setItem('userData', JSON.stringify(storedData));

    alert("Data Saved Successfully!");
    document.getElementById('registrationForm').reset();
  });

  // Search Data by Blood Group
  function searchData() {
    let searchTerm = document.getElementById('searchInput').value.trim().toUpperCase();
    let storedData = JSON.parse(localStorage.getItem('userData')) || [];
    let resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = "";

    let results = storedData.filter(user => user.bloodGroup.toUpperCase() === searchTerm);

    if (results.length > 0) {
      results.forEach(result => {
        let userDiv = document.createElement('div');
        userDiv.innerHTML = `
          <p><strong>Name:</strong> ${result.fullName}</p>
          <p><strong>Email:</strong> ${result.email}</p>
          <p><strong>Phone:</strong> ${result.phone}</p>
          <p><strong>Home Address:</strong> ${result.homeAddress}</p>
          <p><strong>Blood Group:</strong> ${result.bloodGroup}</p>
          <hr>
        `;
        resultsDiv.appendChild(userDiv);
      });
    } else {
      resultsDiv.innerHTML = "<p>No results found for this blood group.</p>";
    }
  }