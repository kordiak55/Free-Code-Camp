
function telephoneCheck(str) {

    //[1\s]?(\(?(?=\d{3}\)?))\d{3}\)?[-. ]?\d{3}[-. ]?(\d{4})
    
        //2(757)622-7382
    //    var result = str.search(/(\d{3}).*(\d{3}).*(\d{4})/);
        var re = /1?\s?(\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}$/;
    
    
        var res = str.search(re);
    
        console.log(res);
    
    
        if(res == 0){
            return true;
        } else {
            return false;
        }
    
      }
      
    //(\d{3}).*(\d{3}).*(\d{4})  
      
    console.log(telephoneCheck("555-555-5555"));
    console.log(telephoneCheck("2 (757) 622-7382"));
    console.log(telephoneCheck("27576227382"));
    // 555-5555
    
    //([0-9]{3})(.{0,1,2})([0-9]{3}).([0-9]{4})
    
    //Ones to work on....
    
    //(6505552368)
    
    
    //5555555555
    //   //555-555-5555
    //    (555)555-5555
    //     (555) 555-5555
    //      555 555 5555
    //       5555555555
    //        1 555 555 5555