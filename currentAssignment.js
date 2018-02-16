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
    var strArr = str.split('');

    for(i=0;i<str.length;i++){

        var strCut = strArr.slice(0);
        
        let anchor = strCut.splice(i,1);
        //console.log(anchor);
        //console.log(strCut);

        for(j=0;j<anchorPermutations;j++){
         
            let jumper = strCut.splice(0,1);  
            strCut.push(jumper);
            strCut.unshift(anchor);
            console.log(JSON.stringify(strCut));
            
        }

    }

    var permutations = 1;
    return permutations;
  }
  
  console.log(permAlone('abc'));
  