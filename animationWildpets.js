const imageDog = document.querySelector('[src*="skateDog.png"]')
imageDog.style.position = "absolute";
let topPos = 0;
let dir = 1;


function leftRight() {
   if (topPos == 1500) {dir = -1}
   else if (topPos == -10) {dir = 1}
   topPos += 5 * dir;
   imageDog.style.left = `${topPos}px`;
    requestAnimationFrame(leftRight);
}

requestAnimationFrame(leftRight);