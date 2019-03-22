const rabbit = document.getElementById("tail");
rabbit.style.position = "absolute";
let topPos = 0;
let topPosi = 0;
let dir = 1;
let dire = 0;
let dira = 1;
let topPosa = 0;

function hautBas() {
    if (topPos == 10) { dir = -1 }
    else if (topPos == -10) { dir = 1 }
    topPos += 1 * dir;
    rabbit.style.left = `${topPos}px`;
    requestAnimationFrame(hautBas);
}

requestAnimationFrame(hautBas);

const fish = document.getElementById("imgbulles");
fish.style.position = "absolute";
/* let topPos = 0; */
/* let dir = 1; */

function hautb() {
    if (topPosi <= 0) { dire = 1 }
    else if (topPosi >= 50) { dire = -1 }
    topPosi += 1 * dire;
    fish.style.top = `${topPosi}px`;
    requestAnimationFrame(hautb);
}
requestAnimationFrame(hautb)



const imageDog = document.querySelector('[src*="skateDog.png"]')
imageDog.style.position = "absolute";
/* let topPos = 0;
let dir = 1; */


function leftRight() {
   if (topPosa == 1500) {dira = -1}
   else if (topPosa == -10) {dira = 1}
   topPosa += 5 * dira;
   imageDog.style.left = `${topPosa}px`;
    requestAnimationFrame(leftRight);
}

requestAnimationFrame(leftRight);
