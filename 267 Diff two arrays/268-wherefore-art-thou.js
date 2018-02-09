
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

    var sCount = 0;

  var sLog = [];
  
      collection.forEach(function(element) {
    
          //console.log(element);
  
          Object.getOwnPropertyNames(element).forEach(function (val, idx, array) {
          
              //console.log(element[val]);
             sCount = 0;
  
              Object.getOwnPropertyNames(source).forEach(function (val2, idx, array) {

                sCount += 1;
  
                  if(element[val] == source[val2] && val == val2){

                      
                      sLog.push("2");
                      //console.log(arr);
                      //arr.push(element);
                      console.log(sLog.length);
                  }
  
              });
                  
          });
  
          if(sLog.length >= sCount){
              arr.push(element);
          }
  
          sLog = [];
          sCount = 0;
      
      }, this);
    
  
      console.log(arr);

  // Only change code above this line
  return arr;
}

//whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }); //Return [{ "a": 1, "b": 2, "c": 2 }].


