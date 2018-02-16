var combineItems = [];

// var curInv = [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"]
// ];

// var newInv = [
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"]
// ];

function updateInventory(curInv, newInv) {

    var newAndCurrent = curInv.concat(newInv);

    //console.log(itemInStock('Toothpaste'));

    for(i=0;i<newAndCurrent.length;i++){

        console.log(JSON.stringify(newAndCurrent[i]));

        addItem(newAndCurrent[i][1],newAndCurrent[i][0]);
    
    }

    var sorted = combineItems.sort(function(a,b){
        return a[1] > b[1];
    });

    console.log(JSON.stringify(sorted));

    return sorted;

}

function itemInStock(item){

    let flag = false;

    if(combineItems.length == 0){
        
        flag = true;

    } else {

        combineItems.forEach(function(element){
        
            if(element[1] == item){
        
                flag = true;
        
            }

        });
    
    }

    return flag;
    
}

function addItem(item, quantity){

    var foundFlag = false;

    combineItems.forEach(function(element){
        
        if(element[1] == item){
    
            element[0] = element[0] + quantity;
            foundFlag = true;

        }

    });

    if(!foundFlag){
        combineItems.push([quantity, item]);
    }
}

//console.log(JSON.stringify(updateInventory(curInv, newInv)));

console.log(JSON.stringify(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])));
