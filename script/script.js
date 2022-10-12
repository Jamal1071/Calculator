/* 
*
* Script - script.js
* author - Jamal
* date - 12 octobar 2022
*/

// USED TO DISPLAY NUMBER IN OUTPUT
function sendNum(num) {
    // GETTING THE VALUE FROM THE ELEMENTS ID 
    let outputScreen = document.getElementById("output").innerHTML;
    // SENDING THE NUMBER INSIDE THE ELEMENT
    document.getElementById("output").innerHTML = outputScreen + (num)
}

// USED TO BRING MATHEMATICAL VALUE IN OUTPUT
function equalTo() {
     // GETTING THE VALUE FROM THE ELEMENTS ID 
    let outputScreen = document.getElementById("output").innerHTML;
    // SENDING THE MATHEMATICAL VALUE INSIDE THE OUTPUT
    document.getElementById("output").innerHTML = eval(outputScreen);
}

// USED TO DELETE LETTER IN OUTPUT
function clrBtn(){
    // GETTING THE VALUE FROM THE ELEMENTS ID 
    let outputScreen = document.getElementById("output").innerHTML;
    //  DELETING THE LAST NUMBER IN OUTPUT
    document.getElementById("output").innerHTML = outputScreen.slice(0, outputScreen.length -1)
}