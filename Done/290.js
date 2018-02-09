
function sym(args) {

    //Argument 0, 1
    //Argument 2... 
    //do it for each one? 

    //I need to find a value, then another value.
    var runningUnique = [];

    for(j=0;j<arguments.length;j++){
        //console.log('j', j);

        if(runningUnique.length == 0){
            
            runningUnique = findUniqueBetweenArrs(arguments[j], arguments[j+1]);
            //console.log('j', j);
            j++;
            //console.log('j', j);
        
        } else {

            runningUnique = findUniqueBetweenArrs(runningUnique, arguments[j]);
        
        }

    }

    return runningUnique;

  }
  

function findUniqueBetweenArrs(args){

    var myArgs = []

    for(i=0;i<arguments.length;i++){
        myArgs.push([].slice.call(arguments[i]));
    }

    myArgs.forEach(function(arr, index, myArray){
        console.log('Ar item', arr)
        myArray[index] = removeDuplicates(arr);
    });

    console.log('Clean Args', myArgs);

    var flatArgs = myArgs.reduce(function(accumulator, currentValue, currentIndex, array){
        
        //console.log('accumulator',accumulator);
        //console.log('Current Vlaue',currentValue);
        return accumulator.concat(currentValue);
    
    });

    flatArgs.sort(function(a,b){
        return a-b
    });

    //console.log('flatArgs', flatArgs);

    var notUnique = [];

    //for loop
    //if current = next, flag, else push to new val? 
    for(i=0;i<flatArgs.length;i++){
        if(flatArgs[i] == flatArgs[i+1] && i<flatArgs.length-1){
            notUnique.push(flatArgs[i]);
        }
    }

    //console.log('notUnique', notUnique);

    unique = flatArgs.filter(function(fil){
        console.log('fil', fil);
        return !notUnique.includes(fil);
    });

    console.log('unique', unique);

    myArgs = [].concat(unique);
    
    return unique;

}


function removeDuplicates(arr){

    let result = [];

    for (let index = 0; index < arr.length; index++) {
    let el = arr[index];

    if (!result.includes(el)) result.push(el);
    }

    return result;

}

//uniqueOnly([1, 1, 2, 5]);

console.log('answer', sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
