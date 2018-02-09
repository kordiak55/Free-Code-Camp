
function pairElement(str) {

    missingPairs = Array.from(str);
    foundPairs = [];

    missingPairs.forEach(function(element) {
        
        console.log(element);
        foundPairs.push(findPair(element));

    }, this);

    console.log(foundPairs);

    var DNA = combinePair(missingPairs, foundPairs);

    console.log(DNA);

    return DNA;
}
  
  pairElement("GCG");

function combinePair(arr1, arr2){

    var DNA = [];

    for(i=0;i<arr1.length;i++){
        var pair = [];
        pair.push(arr1[i]);
        pair.push(arr2[i]);
        DNA.push(pair);
    }

    return DNA;
}

  function findPair(element){

    var compliment;

    switch(element){
        case 'A':
            compliment = 'T';
            break;
        case 'T':
            compliment = 'A';
            break;
        case 'C':
            compliment = 'G';
            break;
        case 'G':
            compliment = 'C';
            break;
    }

    return compliment;

  }