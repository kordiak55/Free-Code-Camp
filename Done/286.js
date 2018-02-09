

var addedSoFar = 0;

function addTogether() {

    function addToMe(adder){
    addedSoFar += adder;
    return addedSoFar;
    }

    console.log(arguments[0]);
    console.log(arguments[1]);
    
    if(arguments.length == 1 && typeof(arguments[0]) == 'number'){
        //return function

        var oneVar = arguments[0];

        return function(y) {

            console.log(oneVar, '+', y);

            if(Array.isArray(y)){
                console.log('isNaN true');
                return undefined;
            } else {
                return oneVar + y;
            }


        };

    } else {

        //look for string numbers or NaN, NaN can see numbers as strings.
        if(typeof(arguments[1]) == 'string' || isNaN(arguments[1]) || Array.isArray(arguments[1])){
            //console.log('NaN lands');
            return undefined;
        } else {
            //return the sum :)
            var mySum = arguments[0] + arguments[1];
            return mySum;
        }



    }

}


console.log(addTogether(2)([3]));