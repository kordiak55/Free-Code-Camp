
function findElement(arr, func) {
    var num = 0;
    var bar  = arr.filter(func, arr)
    return bar[0];
  }
  
//var finder = findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

//console.log(finder);



function dropElements(arr, func) {
    // Drop them elements.
    var test = func(4);

    //WTF why do arrays link?
    var mirror = arr.slice();

    for(i=0;i<arr.length;i++){
        console.log(arr[i], func(arr[i]));

        //if function returns true, stop.
        //of if false, do this, till break? 
        if(func(arr[i]) == false){
            mirror.shift();
        } else {
            break;
        }
    }


    return mirror;
  }
  
var dropper = dropElements([0, 1, 0, 1], function(n) {return n === 1;})
console.log(dropper);

dropper = dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
console.log(dropper);
