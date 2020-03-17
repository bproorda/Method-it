// Form stuff for landing page

var nameForm = document.getElementById('nameForm');
nameForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var userNameProvided = document.getElementById('userName').value;
    localStorage.setItem('userName', userNameProvided);
    nameForm.textContent = 'Welcome to our site ' + userNameProvided;

});