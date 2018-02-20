function findPermutations(permString){

    let switchStringArr = permString.split('');
    //let charCount = permString.length;
    let permuations = [];
    let h = 0;

    function swapCharacters(p1,p2){
        let holder = switchStringArr[p1];
        switchStringArr[p1] = switchStringArr[p2];
        switchStringArr[p2] = holder;
    }

    function isEven(int){
        if(int%2 == 0){
            return true;
        } else {
            return false;
        }
    }

    //Heaps algorithm
    function heap(charCounter){
        
        console.log('Heap Called', ++h);
        console.log('charCounter:', charCounter);
        
        if(charCounter === 1){
            //log permutation
            permuations.push(switchStringArr.join(''));
            console.log('Added:', switchStringArr.join(''));

        } else {
            //look for permutation
            //why do we need let here? c
            for(let i=0;i<charCounter;i++){

                heap(charCounter-1);

                //check for swap step
                if(isEven(charCounter)){
                    //charCount even, swap i and charCount -1
                    swapCharacters(i, charCounter-1);
                    console.log('even', i, charCounter-1);
                } else {
                    //charCount odd, swap 0 and charCount - 1
                    swapCharacters(0, charCounter-1);
                    console.log('odd', 0, charCounter-1);
                }


            }


        }

        console.log('Heap',h, 'end');

    }

    heap(permString.length);

    console.log(permuations);
    return permuations;

}

function factorial(stringLength) {

    var permutations = 1;
    
    for(i=stringLength;i>1;i--){
    
            permutations = permutations * i;
    
        }
    
    return permutations;
}



function permAlone(str) {
    let allPermutations = findPermutations(str);
    
    console.log('Permutation count check', allPermutations.length == factorial(str.length));

    myRegex = /([a-z])\1/;

    let scrubbed = allPermutations.filter(function(str){
            return !str.match(myRegex);
    });

    console.log(scrubbed);

    return scrubbed.length;

  }
  
  permAlone('aab');
  console.log(permAlone('aabbb'));

