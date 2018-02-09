//First, find all the words, and create an array of them
//next, pump those dash's back in.


function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    //This was stupid hard, watch videos on Regex...
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2')

    str = str.toLowerCase();
    console.log(str)

    str = str.replace(/[\s_]/g,'-');
    
    return str;
  }
  
  console.log(spinalCase('ThisITsSpinalTap'));

