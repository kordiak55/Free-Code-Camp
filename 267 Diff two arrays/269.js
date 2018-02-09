
function myReplace(str, before, after) {
  
    var oStart = str.indexOf(before);
    var oEnd = before.length + oStart;

    var capCheck = before[0];
    console.log(capCheck);
    
    var newAfter;

    if(capCheck == capCheck.toLowerCase()){
        //do nothing
        newAfter = after;

    } else {

        //convert to upper
        var addCap = after[0].toUpperCase();

        newAfter = setCharAt(after, 0, addCap);
        
        console.log(newAfter);
    }

    var newString = str.replace(before, newAfter);

    console.log(newString);

    return newString;
}

//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

myReplace("His name is Tom", "Tom", "john")

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}