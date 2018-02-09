
function makeMults(number){
    var myMultiples = [];
    for(i=1;i<500000;i++){
        myMultiples.push(number*i);
    }
    return myMultiples;
}

function findCommonMultiples(arr1, arr2){
    
    var commonMultiples = [];

    if(arr1[0] == 1){
        //Find the multiples of the second number only, because first array is all numbers. 
        commonMultiples = arr2;
    } else {
        // console.log("help me");
        // commonMultiples = arr1.filter((arr1Num) => arr2.includes(arr1Num));
        // console.log("help me");
        //Find multiples between both numbers
        for(i=0;i<arr1.length;i++){
            if(arr2.includes(arr1[i])){
                commonMultiples.push(arr1[i]);
                console.log(arr1[i]);
            }
        
            // for(j=0;j<arr2.length;j++){
            //     if(arr1[i] == arr2[j]){
            //         commonMultiples.push(arr1[i]);
            //         console.log(arr1[i]);
            //         break;
            //     }
            
        }
    }

    
    return commonMultiples;
}

function isInt(number) {
    return number % 1 === 0;
}

function divisibleByAll(myCommons, arr){

    var passed = [];

    arr.sort(function(a,b){
        return b - a;
    });

    //console.log(arr);
    
    for(j=0;j<myCommons.length;j++){

        var failChecker = false;

        for(var i=arr[0];i>=arr[1];i--){

            if(isInt(myCommons[j]/i) == false){
                failChecker = true;
            }

        }

        if(failChecker == false){
            passed.push(myCommons[j]);
        }

    }

    return passed;
}

function smallestCommons(arr) {

    arr.sort(function(a,b){
        return a-b;
    });

    console.log(arr);

    if(arr[0] == 1){
        //First number is 1, no need to calculate multples. 
        var m1 = [1];
        var m2 = makeMults(arr[1]);
        var ma1 = m1;
        var ma2 = divisibleByAll(m2, arr);
    } else {
        //Calculate both multiples.
        var m1 = makeMults(arr[0]);
        var m2 = makeMults(arr[1]);
        var ma1 = divisibleByAll(m1, arr);
        var ma2 = divisibleByAll(m2, arr);
    }
    

    console.log('MA1:', ma1);
    console.log('MA2:', ma2);

    var myCommons = findCommonMultiples(ma1, ma2);

    console.log(myCommons);
    console.log('Length:', myCommons.length, 'last:', myCommons[myCommons.length-1]);

    var smallestCommon = myCommons[0];

   // var smallestCommon = divisibleByAll(myCommons, arr);

    //console.log(smallestCommon);

    return smallestCommon;
  }
  
console.log('end');
console.log(smallestCommons([23,18]));



  