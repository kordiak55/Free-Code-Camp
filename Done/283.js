function nestedCheck(item){
    return Array.isArray(item);
}

function nestedDepth(array){



}

function steamrollArray(arr) {
    // I'm a steamroller, baby
    var tar = arr;

    //Can't say I 100% understand this one....
    // [].concat.apply(basically is strips one layer of the array. Doing it multiple time strips away more layers)
    //Need to measure how deep an array goes in order to correctly flatten
    for(i=0;i<arr.length;i++){
        tar = [].concat.apply([], tar);
        console.log(tar);
    }



    return tar;
}

var lar = steamrollArray([1, [2], [3, [[4]]]]);

console.log(lar);

//steps...
//look at value, if array, drill down. Otherwise add to your new array. 

