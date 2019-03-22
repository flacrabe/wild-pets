$(document).ready(function(){

    
    const chat = document.querySelector('[src*="images/chat2.png"]')
    chat.style.position = "absolute";
    let topPos = 480;
    let dir = -1;
    

    function hautbas() {
        if (topPos == 110) {
            dir = 1
        } else if (topPos == 350) {
            dir = -1
        }
        topPos += 1 * dir;
        chat.style.top = `${topPos}px`;
        requestAnimationFrame(hautbas);
    }

    requestAnimationFrame(hautbas);
});







        