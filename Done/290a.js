function checkCashRegister(price, cash, cid) {
    var change;

    var changeDue = cash - price;
    var drawerTotal = totalDrawer(cid);

    console.log(JSON.stringify(convertDrawer(cid)));

    if(changeDue > drawerTotal){
        return "Insufficient Funds";
    } else if (changeDue == drawerTotal) {
        return "Closed";
    } else {
        var totalChange = changeDenominationDue(changeDue, cid);
        if(totalChange == 'Insufficient Funds'){
            return 'Insufficient Funds';
        } else {
        return(convertDrawerBack(totalChange));
        }
    }

  }
  
  
function convertDrawer(cid){

    var balance = [];

    for(i=0;i<cid.length;i++){

        switch(cid[i][0]){
            case 'PENNY':
            balance.push([0.01, cid[i][1]]);
            break;
            case 'NICKEL':
            balance.push([0.05, cid[i][1]]);
            break;5
            case 'DIME':
            balance.push([0.10, cid[i][1]]);
            break;
            case 'QUARTER':
            balance.push([0.25, cid[i][1]]);
            break;
            case 'ONE':
            balance.push([1, cid[i][1]]);
            break;
            case 'FIVE':
            balance.push([5, cid[i][1]]);
            break;
            case 'TEN':
            balance.push([10, cid[i][1]]);
            break;
            case 'TWENTY':
            balance.push([20, cid[i][1]]);
            break;
            case 'ONE HUNDRED':
            balance.push([100, cid[i][1]]);
            break;

        }

    }

    balance.sort(function(a,b){
        return b[0]-a[0];
    });

    return balance;

}

function totalDrawer(cid){

    var balance = 0.00;

    for(i=0;i<cid.length;i++){

        balance += cid[i][1]

    }

    return balance.toFixed(2);

}

function convertDrawerBack(changeDue){

    var balance = [];

    for(i=0;i<changeDue.length;i++){

        switch(changeDue[i][0]){
            case 0.01:
            balance.push(['PENNY', changeDue[i][1]]);
            break;
            case 0.05:
            balance.push(['NICKEL', changeDue[i][1]]);
            break;
            case 0.10:
            balance.push(['DIME', changeDue[i][1]]);
            break;
            case 0.25:
            balance.push(['QUARTER', changeDue[i][1]]);
            break;
            case 1:
            balance.push(['ONE', changeDue[i][1]]);
            break;
            case 5:
            balance.push(['FIVE', changeDue[i][1]]);
            break;
            case 10:
            balance.push(['TEN', changeDue[i][1]]);
            break;
            case 20:
            balance.push(['TWENTY', changeDue[i][1]]);
            break;
            case 100:
            balance.push(['ONE HUNDRED', changeDue[i][1]]);
            break;

        }

    }

    return balance;
}

function changeDenominationDue(changeDue, cid){
    
    var drawerCount = convertDrawer(cid);

    var denominationsDue = [];

    let runningChange = changeDue;

    for(i=0;i<drawerCount.length;i++){

        //Check the following.
        //is this divisable?
        //do i have enough?
        //subtrack from my drawer
        let addedVal = 0;

        while(reducableBy(runningChange, drawerCount[i][0]) && drawerCount[i][1] > 0 && runningChange > 0){

            runningChange = Math.round((runningChange - drawerCount[i][0])*100)/100;
            drawerCount[i][1] = drawerCount[i][1] - drawerCount[i][0];
            addedVal += drawerCount[i][0];
            console.log('RC', runningChange);
            console.log('AV', addedVal);

        }

        if(addedVal > 0){
            denominationsDue.push([drawerCount[i][0], addedVal]);
        }
    }
    
    if(runningChange == 0){
        return denominationsDue;
    } else {
        return 'Insufficient Funds';
    }

}

function reducableBy(value, reducer){
    var difference = value - reducer;
    return difference >= 0;
}

function divisibleBy(value, divider){

    var quotient = (value / divider);

    if(Number.isInteger(quotient)){
        return true;
    } else {
        return false;
    }

}



//totalDrawer([["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
  
var due = checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(JSON.stringify(due));
