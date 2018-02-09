
function truthCheck(collection, pre) {
    // Is everyone being true?

    for(i=0;i<collection.length;i++){
        if(collection[i][pre] == undefined){
            console.log('Not present');
            return false;
        } else if(collection[i][pre] == '' || collection[i][pre] == 0) {
            console.log('Null value');
            return false;
        } else if(typeof(collection[i][pre]) != 'string' && isNaN(collection[i][pre])) {
            console.log('Nan!');
            return false;
        }
      
    }

    return true;
  }
  
  var aaa = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  console.log(aaa);
