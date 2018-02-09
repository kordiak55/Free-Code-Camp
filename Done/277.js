//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

//&LT;, &MT;, &QUOT; &apos;
function convertHTML(str) {
    // &colon;&rpar;
    //var reg = /&/

    var charHunter = [
        {reg: /&/g,
        replacement: '&amp;'},
        {reg: /</g,
        replacement: '&lt;'},
        {reg: />/g,
        replacement: '&gt;'},
        {reg: /"/g,
        replacement: '&quot;'},
        {reg: /'/g,
        replacement: '&apos;'}
    ]

    for (i=0; i<charHunter.length; i++) {
        var str = str.replace(charHunter[i].reg, charHunter[i].replacement)
    }

    return str;
  }
  
  var poop = convertHTML("Hamburgers < Pizza < Tacos");

  console.log(poop);
  