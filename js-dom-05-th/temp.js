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






