'use strict';

var userProfile = JSON.parse(localStorage.getItem('userprofile'));
console.log(userProfile);
var attempted = userProfile.timesMethodShown;
var correct = userProfile.timesMethodCorrect;
var percents = [];

console.log(attempted);
console.log(correct);


function progressTracker() {
  //filling percents array
  for (var i = 0; i < 30; i++) {
    var percentNumber = (correct[i] / attempted[i] ) * 100;
    if (isNaN(percentNumber)) {
      percentNumber = 0;
      percents.push(percentNumber);
    } else {
      percents.push(percentNumber);
    }
  }
  for (var j = 0; j < 30; j++) {
    var defineNode = document.getElementById('define' + (j+1));
    var childNode = defineNode.childNodes[1];
    // console.log(childNode.textContent);
    if (percents[j] === 100) {
      defineNode.style.backgroundColor = 'gold';
    } else if (percents[j] < 100 && percents[j] >= 70) {
      defineNode.style.backgroundColor = 'blue';
    } else if (percents[j] < 70 && percents[j] >= 50) {
      defineNode.style.backgroundColor = 'yellow';
    } else if (percents[j] < 50 && percents[j] > 0) {
      defineNode.style.backgroundColor = 'red';
    }
    if (percents[j] > 0) {
      var progressText = document.createElement('p');
      progressText.textContent = 'You got this one right ' + percents[j] + '% of the time.';
      //childNode.textContent = childNode.textContent + '  You got this one right ' + percents[j] + '% of the time.';
      childNode.appendChild(progressText);
    }
  }

}


progressTracker();


