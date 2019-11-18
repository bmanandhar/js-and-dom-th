const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const createElementButton = document.querySelector('button.createElementButton');

listUl.addEventListener('click', (event) => {
  if(event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode; //parent of 'li'
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode; //parent of 'li
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode; //parent of 'li
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});


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
