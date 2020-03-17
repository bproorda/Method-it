'use strict';
console.log('this page is running!');


var allMethods = [];
var methodNames = ['push', 'pop', 'shift', 'unshift'];
var methodQuestions = ['adds item to end of array', 'takes item off end of array', 'adds item to beginning of array', 'takes item off beginning of array'];
var methodAnswer = ['a', 'b', 'c', 'd'];
var nodeNumber = 4;
var displayedMethods = [];

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

//initial render to nodes
function renderNodes(){
  for (var j = 1; j <= nodeNumber; j++) {
    var nodeId = ('div' + j);
    var whichQuestion = 'question' + j;
    var arrayIndex = j - 1;
    var nodeLocation = document.getElementById(nodeId);
    var kids = nodeLocation.childNodes;
    kids[1].textContent = displayedMethods[arrayIndex].name;
    kids[3].textContent = displayedMethods[arrayIndex].question;

    //adding event listener to dots to revel nodes
    var revealNode = document.getElementById('dot' + j);
    revealNode.addEventListener('click', showMe, false);

    //adding event listener to close buttons
    var closeBtn = document.getElementById('close' + j);
    closeBtn.addEventListener('click', closeDiv);

    //adding event listener to buttons for answers
    var nodeButton = document.getElementById('button' + j);
    // console.log(nodeButton);
    nodeButton.addEventListener('click', checkAnswer, false);

    //saving which object is tied to which node in localstorage
    localStorage.setItem(whichQuestion, JSON.stringify(allMethods[arrayIndex]));
  }
}

for (var p = 0; p < nodeNumber; p++){
  displayedMethods.push('');
}
randomizer();


//hides node when close button is clicked
function closeDiv() {
  var idEnd = getIdnumber(event);
  var thisDiv = document.getElementById('div' + idEnd);
  thisDiv.style.visibility = 'hidden';
}


//reveals node when clicked
function showMe() {
  var idEnd = getIdnumber(event);
  // console.log('show me div ' + idEnd);
  var node = document.getElementById('div'+ idEnd);
  node.style.visibility = 'visible';
}

//checks the users answer against correct answer stored in local storage
function checkAnswer() {
  event.preventDefault();
  var idEnd = getIdnumber(event);
  var whichQuestionNow = 'question' + idEnd;
  var userAnswerNode = document.getElementById(whichQuestionNow);
  var userAnswer = userAnswerNode.value;
  var storedObjectString = localStorage.getItem(whichQuestionNow);
  var storedObject = JSON.parse(storedObjectString);
  console.log(storedObject.answer);
  var thisDot = document.getElementById('dot' + idEnd);
  var thisDiv = document.getElementById('div' + idEnd);
  var thisSubmit = document.getElementById('button' + idEnd);
  var submitParent = thisSubmit.parentNode;

  if (userAnswer === storedObject.answer) {
    console.log('correct!');
    thisDot.style.backgroundColor = 'blue';
    var parent = userAnswerNode.parentNode;
    parent.removeChild(userAnswerNode);
    submitParent.removeChild(thisSubmit);
    var newText = document.createElement('p');
    newText.textContent = 'You correctly answered:  ' + userAnswer;
    parent.appendChild(newText);
  } else {
    console.log('incorect');
    thisDot.style.backgroundColor = 'red';
  }
  thisDiv.style.visibility = 'hidden';
}
function getIdnumber(eventTarget) {
  var id = eventTarget.target.id;
  var idEnd =id.charAt(id.length-1);
  return idEnd;
}

// event listener for reset image
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', randomizer);

function randomizer(){
  console.log('this was clicked');
  for (var k = 0; k < displayedMethods.length; k++) {
    var nextMethod = Math.floor(Math.random() * allMethods.length);
    for (var m = 0; m < allMethods.length; m++) {
      if (!displayedMethods.every(function(number) {
        return number !== nextMethod;
      })) {
        nextMethod = Math.floor(Math.random() * allMethods.length);
      }
    }
    displayedMethods[k] = allMethods[nextMethod];
  }
  renderNodes();
}
