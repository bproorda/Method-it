'use strict';
var allUsers = [];
function UserProfile(username) {
  this.username = username,
  this.timesMethodShown = [],
  this.timesMethodCorrect = [];
  allUsers.push(this);
}
var initialUserProfile = new UserProfile('name');
for (var u = 0; u < 30; u++){
  initialUserProfile.timesMethodShown.push(0);
  initialUserProfile.timesMethodCorrect.push(0);
}
localStorage.setItem('userprofile', JSON.stringify(initialUserProfile));

var listen = document.getElementById('nameForm');
listen.addEventListener('submit', function (event) {
  event.preventDefault();
  var userNameProvided = localStorage.getItem('userName');
  var newObject = new UserProfile(userNameProvided);
  for (var t = 0; t < 30; t++){
    newObject.timesMethodShown.push(0);
    newObject.timesMethodCorrect.push(0);
  }
  //   console.log(newObject);
  localStorage.setItem('userprofile', JSON.stringify(newObject));
});
