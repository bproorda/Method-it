'use strict';
var allUsers = [];
function UserProfile(username) {
  this.username = username,
  this.timesMethodShown = [],
  this.timesMethodCorrect = [];
  allUsers.push(this);
}

var listen = document.getElementById('nameForm');
listen.addEventListener('submit', function (event) {
  event.preventDefault();
  var userNameProvided = localStorage.getItem('userName');
  var newObject = new UserProfile(userNameProvided);
  for (var u = 0; u < 30; u++){
    newObject.timesMethodShown.push(0);
    newObject.timesMethodCorrect.push(0);
  }
  //   console.log(newObject);
  localStorage.setItem('userprofile', JSON.stringify(newObject));
});
