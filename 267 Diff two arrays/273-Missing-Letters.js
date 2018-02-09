
function fearNotLetter(str) {
    
    var wordCounts = Array.from(str);

    var answer;

    wordCounts.forEach(function (element, index, arr){

        try {

            if((element.charCodeAt() + 1) == (arr[index+1].charCodeAt())){

            } else {

                answer = String.fromCharCode(element.charCodeAt() + 1);
            
            }

        } catch (e) {

            //answer = undefined;

        }


    });

    console.log(answer);

    return answer;

  }
  
  fearNotLetter("abce");
  