//Returns the number of possible permutations for a given set.
function factorial(stringLength) {

    var permutations = 1;

    
    for(i=stringLength;i>1;i--){
    
            permutations = permutations * i;
    
        }
    
        return permutations;
    }
    
//not actually needed
function purgeDuplicates(stringArray){

    var theWorthy = [];

    for(i=0;i<stringArray.length;i++){

        let thePurge = stringArray[i];
        let purgeCount = 0;

        for(j=0;j<stringArray.length;j++){

            if(thePurge==stringArray[j]){
                purgeCount++;
            }

        }

        if(purgeCount == 1){

            theWorthy.push([].concat(thePurge));

        }


    }

    return theWorthy;

}


function purgeRepeats(stringArray){

    var theWorthy = [];

    for(i=0;i<stringArray.length;i++){

        let thePurge = stringArray[i];
        let purgeCount = 0;

        //need to look at array and see if it has repeatching chars
        

        for(j=0;j<thePurge.length;j++){

            if(thePurge[j]==thePurge[j+1]){
                purgeCount++;
            }

        }

        if(purgeCount == 0){

            theWorthy.push([].concat(thePurge));

        }


    }

    return theWorthy;

}

function permAlone(str) {

    var totalPermutations = factorial(str.length);
    var anchorPermutations = totalPermutations/str.length;
    var strArr = str.split('');
    var permArray = [];

    for(i=0;i<str.length;i++){

        var strCut = strArr.slice(0);
        
        let anchor = strCut.splice(i,1);
        //console.log(anchor);
        //console.log(strCut);

        for(j=0;j<anchorPermutations;j++){
         
            let jumper = strCut.splice(0,1);  
            strCut.push(jumper);

            //strCut.unshift(anchor);
            //console.log(JSON.stringify(strCut));
            let boo = anchor.concat(strCut);
            let moo = boo.join('');  
            console.log(moo);
            permArray.push(moo);
            
        }



    }

    console.log(JSON.stringify(permArray))

    var thePurged = purgeRepeats(permArray);

    console.log(JSON.stringify(thePurged));

    return thePurged.length;
    

  }


  
  console.log(JSON.stringify(permAlone('aaabb')));
