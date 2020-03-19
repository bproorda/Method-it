'use strict';
console.log('this page is running!');


var allMethods = [];
var methodNames = ['.concat()', '.copyWithin()', '.entries()', '.every()', '.fill()', '.filter()', '.find()', '.findIndex()', '.forEach()', '.from()', '.includes()', '.indexOf()', '.isArray()', '.join()', '.keys()', '.lastIndexOf()', '.valueOf()', '.map()', '.pop()', '..push()', '.reduce()', '.reduceRight()', '.reverse()', '.shift()', '.slice()', '.some()', '.sort()', '.splice()', '.toString()', '.unshift()'];
var methodQuestions = ['Var array1 - [1, 2, 3]<br> Var array2 - [4, 5, 6] <br> What is the expected output of array1.concat(array2);', 'Var array1 = ["a", "b", "c", "d", "e"];What is the expected output<br> of outarray1.copyWithin(1, 3);', 'var array = [“a”, “b”, “c”];<br> var iterator = array.entries();<br><br> for (var e of iterator) { <br>console.log(e); <br>}<br>What is the first array of the expected output?', 'var isBelowThreshold = (currentValue) => currentValue < 40;<br>Var array1 = [1, 30, 39, 29, 10, 13];<br>What is the expected output of (array1.every(isBelowThreshold));  ?', 'var array1 = [1, 2, 3, 4];<br>What is the expected output of array1.fill(6)); ?', 'var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];<br>What is the expected output of words.filter(word => word.length > 6);', 'var array1 = [5, 12, 8, 130, 44];<br>What is the expected output of array1.find(element => element > 10);', 'var array1 = [5, 12, 8, 130, 44];<br>Var isLargeNumber = (element) => element > 13;<br>What is the expected output of array1.findIndex(isLargeNumber);', 'Var arrayOne = [1,2,3,4];<br>Var array two= [];<br>function plusOne(element){<br>element++;<br>arrayTwo.push(element)<br>}<br>arrayOne.forEach(plusOne);<br>What will arrayTwo be?', 'Var newArray =  Array.from(‘brenn’);<br>What will newArray look like? Double quotations marks please', 'Var truthyOrFalsy = [5,6,3].includes(3);<br>Will the variable value be true or false?', 'Var newArray = [31, 13, 31];<br>Var lookFor = 13;<br>Var index13 =newArray.indexOf(lookFor);<br>What will the value of index13 be?', 'Var myArray = “I am an Array”;<br>Var truthyOrFalsy =  myArray.isArray;<br>Will it be true or false?', 'Var herArray = [‘s’,’ta’,’c’e’,’y’];<br>Var answer = herArray.join(‘’);<br>What is the answer?', 'Var list = [9,7,5]<br>Var keys = [...list.keys()];<br>What does keys look like?', 'Var us = [‘francesco’, ‘stacey’, ‘francesco’, ‘brenn’, ‘francesco’];<br>us.lastIndexOf(‘francesco’);<br>What does this return?', 'var others = ["Chase", "Marie", "Craig", "Matt"];<br>var v = others.valueOf();<br>The two variables have different values, true or false?', 'Var oldStuff = [1,3,9,];<br>Var newStuff = oldStuff.map(x => x*3);<br>console.log(newStuff);<br>What will be logged in the console?', 'Var amountOfSodas = [98, 47, 36, 62, 87]<br>amountOfSodas.pop();<br>What will the amountOfSodas look like now?', 'Var yetAnotherArray = [87,56,34];<br>yetAnotherArray.push(21);<br>What will the array look like now?', 'var arr = [10,3,2];<br>function sumofArray(sum, num) {<br>return sum - num;<br>}<br>Function thisStuff(item) {<br>document.getElementById("new").innerHTML<br> = arr.reduce(sumofArray);<br> }<br>What will be appended to the page?', 'function sumofArray(sum, num) {<br>    return sum - num;<br>}<br>Function thisStuff(item) {<br>document.getElementById("new").innerHTML<br>  = arr.reduceRight(sumofArray);<br>        }<br>What will be appended to the page?', 'Array1 = [7,8,9,1]<br>Array2 = Array1.reverse();<br>What item will be at index 0 in Array2?', 'Array934 = [‘brenn, ‘stacey’, ‘francesco’’];<br>Array935 = Array935.shift();<br>What will Array935 be?', 'tooMany = [5,7,1,9,13,6]<br>justRight = tooMany.slice(2, 5);Show what justRight will be', 'var isBelowThreshold = (currentValue) => currentValue < 10;<br>Var array1 = [15, 30, 39, 29, 10, 3];<br>What is the expected output of (array1.every(isBelowThreshold));', 'weBeTeamMongoose = ["francesco", "stacey", "brenn"];<br>newArray = weBeTeamMongoose.sort()<br>Which item will be index 0 in newArray?', 'Teams  = [6,8,9];<br>Teams.splice(1,0,7)<br>What will Teams look like now?', 'What = [1,’b’, 5];<br>what.toString();<br>What will be the final array? Use Double quotation marks.', 'lastEverArray = [5, 22, 9, 46]<br>lastEverArray.unshift(11);<br>What will be the index of the new item?']
var methodAnswer = ['[1, 2, 3, 4, 5, 6]', ' ["d", "d", "e", "d", "e"]', '[0, "a"]', 'true', '[6, 6, 6, 6]', '["exuberant", "destruction", "present"]', '12', '3', '[2,3,4,5]', '["b","r","e","n","n"]', 'true', '1', 'false','"stacey"','[0,1,2]', '4', 'false', '[3,9,27]', '[98,47,36, 62]', '[81,56,34,21]', '5', '-11', '1', '["stacey","francesco"]', '[1,9,13]', 'true', '"brenn"', '[6,7,8,9]', '"1b5"', '0'];
var nodeNumber = 8;
var displayedMethods = [];
{/* <br> */}
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



