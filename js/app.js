'use strict';
console.log('this page is running!');


var allMethods = [];
var methodNames = ['push', 'pop', 'shift', 'unshift'];
var methodQuestions = ['adds item to end of array', 'takes item off end of array', 'adds item to beginning of array', 'takes item off beginning of array'];
var methodAnswer = ['a', 'b', 'c', 'd'];
var nodeNumber = 4;

function Methods(name, question, answer) {
  this.name = name;
  this.question = question;
  this. answer = answer;
  this.timesCorrect = 0;
  allMethods.push(this);
}

for (var i = 0; i < methodNames.length; i++) {
  new Methods(methodNames[i], methodQuestions[i], methodAnswer[i]);
}
// console.log(allMethods);

for (var j = 1; j <= nodeNumber; j++) {
  var nodeLocation = document.getElementById(j);
  var kids = nodeLocation.childNodes;
  kids[1].textContent = allMethods[j-1].name;
  kids[3].textContent = allMethods[j-1].question;
}
