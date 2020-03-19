'use strict';
console.log('this page is running!');


var allMethods = [];

var methodNames = ['.concat()', '.copyWithin()', '.entries()', '.every()', '.fill()', '.filter()', '.find()', '.findIndex()', '.forEach()', '.from()', '.includes()', '.indexOf()', '.isArray()', '.join()', '.keys()', '.lastIndexOf()', '.valueOf()', '.map()', '.pop()', '.push()', '.reduce()', '.reduceRight()', '.reverse()', '.shift()', '.slice()', '.some()', '.sort()', '.splice()', '.toString()', '.unshift()'];
var methodQuestions = ['var arrayOne - [1, 2, 3]<br> var arrayTwo - [4, 5, 6] <br><br> What is the expected output of arrayOne.concat(arrayTwo);?<br>', 'var arrayOne = ["a", "b", "c", "d", "e"];<br><br> What is the expected output of arrayOne.copyWithin(1, 3);?', 'var array = ["a", "b", "c"];<br> var iterator = array.entries();<br><br> for (var e of iterator) { <br>console.log(e); <br>}<br><br>What is the first array of the expected output?', 'var isBelowThreshold = (currentValue) => currentValue < 40;<br>Var array1 = [1, 30, 39, 29, 10, 13];<br>What is the expected output of (array1.every(isBelowThreshold));?', 'var array1 = [1, 2, 3, 4];<br>What is the expected output of array1.fill(6); ?', 'var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];<br>What is the expected output of words.filter(word => word.length > 6);?', 'var arrayOne = [5, 12, 8, 130, 44];<br><br>What is the expected output of arrayOne.find(element => element > 10);?', 'var arrayOne = [5, 12, 8, 130, 44];<br>var isLargeNumber = (element) => element > 13;<br><br>What is the expected output of arrayOne.findIndex(isLargeNumber);?', 'var arrayOne = [1, 2, 3, 4];<br>var arrayTwo= [];<br><br>function plusOne(element){<br>element++;<br>arrayTwo.push(element)<br>}<br>arrayOne.forEach(plusOne);<br><br>What will arrayTwo be?', 'var newArray =  Array.from(‘brenn’);<br>What will newArray look like?', 'var truthyOrFalsy = [5, 6, 3].includes(3);<br><br>Will the variable value be true or false?', 'var newArray = [31, 13, 31];<br>var lookFor = 13;<br>var index13 =newArray.indexOf(lookFor);<br><br>What will the value of index13 be?', 'var myArray = “I am an Array”;<br>var truthyOrFalsy =  myArray.isArray;<br><br>Will it be true or false?', 'var herArray = [‘s’,’ta’,’c’e’,’y’];<br>var answer = herArray.join(‘’);<br><br>What is the answer?', 'var list = [9, 7, 5]<br>var keys = [...list.keys()];<br><br>What does keys look like?', 'var us = [‘francesco’, ‘stacey’, ‘francesco’, ‘brenn’, ‘francesco’];<br>us.lastIndexOf(‘francesco’);<br><br>What does this return?', 'var others = ["Chase", "Marie", "Craig", "Matt"];<br>var v = others.valueOf();<br><br>The two variables have different values, true or false?', 'var oldStuff = [1, 3, 9];<br>var newStuff = oldStuff.map(x => x*3);<br>console.log(newStuff);<br><br>What will be logged in the console?', 'var amountOfSodas = [98, 47, 36, 62, 87]<br>amountOfSodas.pop();<br><br>What will the amountOfSodas return?', 'var yetAnotherArray = [87, 56, 34];<br>yetAnotherArray.push(21);<br><br>What will the yetAnotherArray return?', 'var arr = [10, 3, 2];<br>function sumofArray(sum, num) {<br>return sum - num;<br>}<br>Function thisStuff(item) {<br>document.getElementById("new").innerHTML<br> = arr.reduce(sumofArray);<br> }<br><br>What will be appended to the page?', 'function sumofArray(sum, num) {<br>    return sum - num;<br>}<br>function thisStuff(item) {<br>document.getElementById("new").innerHTML<br>  = arr.reduceRight(sumofArray);<br>        }<br><br>What will be appended to the page?', 'arrayOne = [7, 8, 9, 1]<br>arrayTwo = arrayOne.reverse();<br><br>What item will be at index 0 in arrayTwo?', 'array934 = [‘brenn, ‘stacey’, ‘francesco’’];<br>array935 = array935.shift();<br><br>What will array935 return?', 'tooMany = [5,7,1,9,13,6]<br>justRight = tooMany.slice(2, 5);<br><br>What will justRight return?', 'var isBelowThreshold = (currentValue) => currentValue < 10;<br>var arrayOne = [15, 30, 39, 29, 10, 3];<br><br>What is the expected output of (arrayOne.every(isBelowThreshold));?', 'weBeTeamMongoose = ["francesco", "stacey", "brenn"];<br>newArray = weBeTeamMongoose.sort()<br><br>Which item will be index 0 in newArray?', 'teams  = [6, 8, 9];<br>Teams.splice(1,0,7)<br><br>What will teams look like now?', 'What = [1,’b’, 5];<br>what.toString();<br><br>What will be the final array?', 'lastEverArray = [5, 22, 9, 46]<br>lastEverArray.unshift(11);<br><br>What will be the index of the new item?']
var methodAnswer = ['[1, 2, 3, 4, 5, 6]', ' ["d", "d", "e", "d", "e"]', '[0, "a"]', 'true', '[6, 6, 6, 6]', '["exuberant", "destruction", "present"]', '12', '3', '[2, 3, 4, 5]', '["b", "r", "e", "n", "n"]', 'true', '1', 'false','"stacey"','[0, 1, 2]', '4', 'false', '[3, 9, 27]', '[98, 47, 36, 62]', '[81, 56, 34, 21]', '5', '-11', '1', '["stacey","francesco"]', '[1, 9, 13]', 'true', '"brenn"', '[6, 7, 8, 9]', '"1b5"', '0'];
var nodeNumber = 8;


var displayedMethods = [];
{/* <br> */}
function Methods(name, question, answer) {
  this.name = name;
  this.question = question;
  this. answer = answer;
  this.timesCorrect = 0;
  this.userAnswer = '';
  this.nodeState = 'gray';
  // allMethods.push(this);
}

for (var i = 0; i < methodNames.length; i++) {
  allMethods.push(new Methods(methodNames[i], methodQuestions[i], methodAnswer[i]));
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
    kids[3].innerHTML = displayedMethods[arrayIndex].question;

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


randomizer();


//hides node when close button is clicked
function closeDiv(event) {
  var idEnd = getIdnumber(event);
  var thisDiv = document.getElementById('div' + idEnd);
  thisDiv.style.visibility = 'hidden';
}


//reveals node when clicked
function showMe(event) {
  var idEnd = getIdnumber(event);
  var node = document.getElementById('div'+ idEnd);
  node.style.visibility = 'visible';
  //closes others nodes already open
  console.log(node.id);
  for (var z = 1; z <= displayedMethods.length; z++) {
    var otherNodes = document.getElementById('div' + z);
    var condition = (node.id !== otherNodes.id && otherNodes.style.visibility === 'visible');
    if (condition) {
      otherNodes.style.visibility = 'hidden';
    }
  }
}

//checks the users answer against correct answer stored in local storage
function checkAnswer(event) {
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
  // updateQuestionStates();
}

// checks if local storage exists for questionStates, if not then it creates and populates with displayed questions and empty answers
// function updateQuestionStates (){
//   if (!localStorage.questionStates){
//     var questionStates = [];
//     for (var q = 0; q < displayedMethods.length; q++){
//       questionStates.push(new QuestionState(displayedMethods[q].question, ''));
//     }
//     console.log(questionStates);
//     console.log(JSON.stringify(questionStates));
//     localStorage.setItem('questionStates', JSON.stringify(questionStates));
//   }
// }


function QuestionState(question, answer){
  this.storedQuestion = question;
  this.wasAnswered = false;
  this.userAnswer = answer;
}


