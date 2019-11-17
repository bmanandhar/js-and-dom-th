const input_text = document.querySelector('#textContentInput');
const p_text = document.querySelector('p#textContentPara');
const button_text = document.querySelector('#textContentButton');

button_text.addEventListener('click', () => {
  p_text.textContent = input_text.value + ':';                        
})


const input_inner = document.querySelector('#innerHTMLInput');
const p_inner = document.querySelector('p#innerHTMLPara');
const button_inner = document.querySelector('#innerHTMLButton');

button_inner.addEventListener('click', () => {
  p_inner.innerHTML = input_inner.value + ':';                        
})

const ul = document.querySelector('ul'); //button
const button_li_inner = document.querySelector('#button_li_inner');
const list_inner = '<li>Egg Plant</li><li>Avocados</li><li>Milk</li>'
button_li_inner.addEventListener('click', () => {
  ul.innerHTML = list_inner;                               
});

