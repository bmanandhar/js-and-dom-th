### Example:
#### Event Bubbling 

1. Add Element Attribute (CSS property)
1. appendChild(li)
1. removeChild()
1. createElement()
1. mouseover
1. mouseout


<p>Try using the 'Add item' button.</p>

### There are amny more events:
1. click
1. dblclick
1. mousedown
1. mouseup
1. mouseover
1. mouseout
1. keydown
1. keyup
1. keypress

### Evennts for Smart phones and tablets also include:
1. touchstart
1. touchmove
1. touchend


let section = document.getElementsByTagName('section')[0];
let input = document.getElementsByTagName('input');
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


