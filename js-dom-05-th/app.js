const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const createElementButton = document.querySelector('button.createElementButton');
const listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i ++) {
  listItems[i].addEventListener('mouseover', () => {
    listItems[i].textContent =  listItems[i].textContent.toUpperCase();
  });
  listItems[i].addEventListener('mouseout', () => {
    listItems[i].textContent =  listItems[i].textContent.toLowerCase();
  });
}

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput_text.value + ':';                     
})

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = ''; //changes value to an empty-space-display
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

//Below is example for createElement
var messages = [
'Hi, I am a paragraph that was created using createElement() and appendChild() methods. Please check dev-tool element andapp.js file on sourcss.',
  'Message 02',
  'Message 03',
  'Message 04',
  'Message 05'  
];

for (let i = 0; i < messages.length; i ++) {
  let message = messages[i]; 
  
  createElementButton.addEventListener('click', () => {                                        
    let contentDiv = document.getElementById('content');
    let newParagraph = document.createElement('p');
  
    newParagraph.className = 'panel';
    contentDiv.appendChild(newParagraph);
    newParagraph.style.color = 'purple';
    newParagraph.innerHTML = message;
  });
}

/*
var inputValue = document.querySelector('#linkName').value;
document.getElementById('link').textContent = inputValue;

var myList = document.querySelector('ul');
var firstListItem = document.getElementById('first')
myList.removeChild(firstListItem);


var warning = document.getElementById("warning");
var button = document.getElementById('makeItRed');
button.addEventListener('click', () => {warning.style.backgroundColor = 'red'});
*/