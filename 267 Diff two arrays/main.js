
var answer = [];
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); //["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]

console.log(answer);

function diffArray(arr1, arr2){

    arrChecker(arr1, arr2);
    arrChecker(arr2, arr1);

}

function arrChecker(arr1, arr2) {
    
    for(i=0;i<arr2.length;i++){
        
            if(arr1.indexOf(arr2[i]) === -1){
                
                console.log('why me push?: '+ i + " " + (arr2[i]));
                answer.push(arr2[i]);

        }

    }
}
