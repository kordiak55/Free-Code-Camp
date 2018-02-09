function uniteUnique(arr) {
    
    var args = Array.from(arguments);

    var bigArr = [];
    //console.log(args);

    args.forEach(function (element){

        element.forEach(function (num) {

            bigArr.push(num);

        });
    
    });

    console.log(bigArr);

    newArr = [];

    bigArr.forEach(function (element, index, arr){

        var tester = false;

        if(index == 0){

            newArr.push(element);
        
        } else {
        
            newArr.forEach(function (nA){
        
                if(nA == element){
        
                    tester = true;
        
                } else {

                }
            });

            if(tester == false){
                newArr.push(element);
            }
        }

    });

    console.log(newArr);

  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  