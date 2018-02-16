//Returns the number of possible permutations for a given set.
function factorial(stringLength) {

    var permutations = 1;
    
    for(i=stringLength;i>1;i--){
    
            permutations = permutations * i;
    
        }
    
        return permutations;
    }
    
function permAlone(str) {

    var totalPermutations = factorial(str.length);
    var anchorPermutations = totalPermutations/str.length;

    for(i=0;i<anchorPermutations;i++){
        
    }

    return permutations;
  }
  
  console.log(permAlone('aab'));
  