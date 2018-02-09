function translatePigLatin(str) {

    var cut = vowelFinder(str);

    var beforVowel = str.substr(0, cut);
    var afterVowel = str.substr(cut);
    var pigTrail;
    
    if(cut == 0){
        pigTrail = 'way';
    } else {
        pigTrail = 'ay';
    }

    var pigLatin = afterVowel + beforVowel + pigTrail;

    console.log(pigLatin);

    return str;
  
}

translatePigLatin("algorithm")

  function vowelFinder(aString) {
    //Returns the location of the first vowel found in a word
    var vowels = ["a","e","i","o","u","y"];
    var vowelLocation;
    var vowelFound = false;

    var word = Array.from(aString);

    word.forEach(function (character, index, arr){
        
        vowels.forEach(function(vowel) {

            if(character == vowel && vowelFound == false){
                vowelFound = true;
                vowelLocation = index;
            } 

        });

    });

    return vowelLocation;

  }