/*
//step-1
function say(something) {
  console.log(something);
}

function exec(func, arg) {
  func(arg);
}

exec(say, 'Hi, there');
*/
//step-2

function exec(func, arg) {
  func(arg);
}

//exec((something) => {
window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Greetings, everyone!'); //3 seconds, logs out after3 secs, 3000 millisecs

/*
var inputValue = document.querySelector('#linkName').value;
document.getElementById('link').textContent = inputValue;

var myList = document.querySelector('ul');
var firstListItem = document.getElementById('first')
myList.removeChild(firstListItem);


var warning = document.getElementById("warning");
var button = document.getElementById('makeItRed');
button.addEventListener('click', () => {warning.style.backgroundColor = 'red'});

////
let section = document.getElementsByTagName('section')[0];
section.addEventListener('click', (e) => {
  if (e.target.tagName != "INPUT") return;
    e.target.style.backgroundColor = 'rgb(255, 255, 0)';
});

//
let section = document.getElementsByTagName('section')[0];
section.addEventListener('click', (e) => {
  if (e.target.tagName === "INPUT") {
  e.target.style.backgroundColor = 'rgb(255, 255, 0)';
  }
});
var removeMe = document.querySelector('.remove_me');
var parent = removeMe.parentNode;
parent.removeChild(removeMe);
//
const list = document.getElementsByTagName('ul')[0];
list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.previousSibling.className += 'highlight';
  }
});
*/

