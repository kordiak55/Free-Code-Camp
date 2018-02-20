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

function noRepeats(charArray){

    let purgeCount = 0;
    let noRepeats = false;

    for(j=0;j<charArray.length;j++){

        for(i=0;i<charArray[j].length;i++){
        
            if(charArray[j][i]==charArray[j][i+1]){
        
                purgeCount++;
            }
        }

    }

    if(purgeCount == 0){

        noRepeats = true;

    }

    return noRepeats;

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



function newPerm(str){
    
    const stringLength = str.length;
    const totalPermutations = factorial(stringLength);
    let splitString = str.split('');
    let flipper = 0;
    //let permutations = [];
    let validPermuations = 0;

    for(i=0;i<totalPermutations;i++){

        //do some swapping....
        if(flipper == stringLength-1){flipper = 0;}
        let switchChar = splitString.splice(flipper,1);
        splitString.splice(flipper+1, 0, switchChar);
        //console.log(splitString.join(''));
        flipper++;

        let aPermutation = [];
        aPermutation.push(splitString);

        //let fix = workAround(aPermutation)
        //console.log(aPermutation);


        if(noRepeats(splitString)){

            //permutations.push(aPermutation);
            //console.log(aPermutation);
            validPermuations++;
        }




    }

    return validPermuations;

}

function workAround(shitArray){
    
    let newArr = []

    for(i=0;i<shitArray.length;i++){
    
        newArr.push(shitArray[i].join(''));

    }
    
    return newArr;
}
  console.log(JSON.stringify(newPerm('abc')));
  //console.log(JSON.stringify(permAlone('aaabb')));

