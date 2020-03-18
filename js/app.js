'use strict';
console.log('this page is running!');


var allMethods = [];
var methodNames = ['.concat()', '.copyWithin()', '.entries()', '.every()', '.fill()', '.filter()', '.find()', '.findIndex()', '.forEach()', '.from()', '.includes()', '.indexOf()', '.isArray()', '.join()', '.keys()', '.lastIndexOf()', '.valueOf()', '.map()', '.pop()', '..push()', '.reduce()', '.reduceRight()', '.reverse()', '.shift()', '.slice()', '.some()', '.sort()', '.splice()', '.toString()', '.unshift()'];
var methodQuestions = ['[1, 2, 3, 4, 5, 6]', ' ["d", "d", "e", "d", "e"]', '[0, "a"]', 'true', '[6, 6, 6, 6]', '["exuberant", "destruction", "present"]', '12', '3', '[2,3,4,5]', '["b","r","e","n","n"]', 'true', '1', 'false','"stacey"','[0,1,2]', '4', 'false', '[3,9,27]', '[98,47,36, 62]', '[81,56,34,21]', '5', '-11', '1', '["stacey","francesco"]', '[1,9,13]', 'true', '"brenn"', '[6,7,8,9]', '"1b5"', '0'];
var methodAnswer = ['[1, 2, 3, 4, 5, 6]', ' ["d", "d", "e", "d", "e"]', '[0, "a"]', 'true', '[6, 6, 6, 6]', '["exuberant", "destruction", "present"]', '12', '3', '[2,3,4,5]', '["b","r","e","n","n"]', 'true', '1', 'false','"stacey"','[0,1,2]', '4', 'false', '[3,9,27]', '[98,47,36, 62]', '[81,56,34,21]', '5', '-11', '1', '["stacey","francesco"]', '[1,9,13]', 'true', '"brenn"', '[6,7,8,9]', '"1b5"', '0'];
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
    localStorage.setItem(whichQuestion, JSON.stringify(displayedMethods[arrayIndex]));
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


  if (userAnswer === storedObject.answer) {
    console.log('correct!');
    thisDot.style.backgroundColor = 'blue';
    thisSubmit.style.display = 'none';
    userAnswerNode.style.display = 'none';
    // var parent = userAnswerNode.parentNode;
    var newText = document.getElementById('article' + idEnd);
    newText.textContent = 'You correctly answered:  ' + userAnswer;
  } else {
    console.log('incorrect');
    thisDot.style.backgroundColor = 'red';
  }
  userAnswerNode.value = '';
  thisDiv.style.visibility = 'hidden';
}
function getIdnumber(eventTarget) {
  var id = eventTarget.target.id;
  var idEnd =id.charAt(id.length-1);
  return idEnd;
}
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
    //reseting node content and background color
    var indexNumber = k + 1;
    var userInput = document.getElementById('question' +indexNumber);
    var userSubmit = document.getElementById('button' + indexNumber);
    var newdot = document.getElementById('dot' + indexNumber);
    var newText = document.getElementById('article' + indexNumber);
    newText.textContent = '';
    userInput.style.display = 'inline-block';
    userSubmit.style.display = 'inline-block';
    newdot.style.backgroundColor = '#bbb';
    displayedMethods[k] = allMethods[nextMethod];
  }
  renderNodes();
}


