let target = document.getElementById('target');

target.style.position = 'relative';
let topPos = -100;
let dir = -1;

function test() {
   if (topPos == 100) {
      dir = 1
   } else if (topPos == -100) {
      dir = -1
   }
   topPos += -5 * dir
   target.style.left = `${topPos}px`;
   requestAnimationFrame(test);
}

requestAnimationFrame(test);

let testButton = document.getElementById('test');
testButton.addEventListener('click', function(){
   requestAnimationFrame(test)
})
