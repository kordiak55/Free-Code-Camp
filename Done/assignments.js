//280
var myPrimes;

function isInt(number) {
    return number % 1 === 0;
}

function isPrime(number) {

    var primeCheck = true;

    for(i=2;i<=number-1;i++){
        //console.log(isInt(number/i));
        //console.log(i);
        if(isInt(number/i)){
        primeCheck = false;
        }
    }

    return primeCheck;

}

function sumPrimes(num) {

    myPrimes = [];

    for(i=1;i<=num;i++){
        if(isPrime(i)){
            myPrimes.push(i);
        }
    }

    //add them
    var adder = 0;

    myPrimes.forEach(function(element, index){
        adder += element;
    });


    return adder;
}


/* 279
 Sum All Odd Fibonacci Numbers
 Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5. */

function sumFibs(num) {

    var fib = 1;
    var fib1 = 1;

    var myFibs = [fib, fib1];

    for(i=0;i<(num/2);i++){
        
        fib = fib + fib1;
        myFibs.push(fib)
        fib1 = fib + fib1;
        myFibs.push(fib1)
        
        //console.log(fib);
        //console.log(fib1);

    }
    
    console.log(myFibs);

    var myOddFibs = [];

    myFibs.forEach(function(element, i){
        if((element % 2) == 1){
            //odd, add to my odd fibs
            myOddFibs.push(element);
        } else {
            //do nothing 
        }
    });

    console.log(myOddFibs);

    var adder = 0;

    //now add array.
    myOddFibs.forEach(function(element, id){
        if(element<=num){
        adder += element;
        }
    })

    console.log(adder);

    return adder;
  }
  
  sumFibs(4);
