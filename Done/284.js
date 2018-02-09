
function binaryAgent(str) {

    var splitString = str.split(' ')
    var mySentence = "";
    var myCharacters = []

    console.log(splitString);

    splitString.forEach(element => {
        myChar = String.fromCharCode(parseInt(element, 2));
        myCharacters.push(myChar)
    });

    str = String.fromCharCode(parseInt('01000001', 2));

    mySentence = myCharacters.join('');

    return mySentence;
  }
  
var bA = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(bA);