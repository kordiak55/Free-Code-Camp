
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
    var myVal = value;

    if(value == ""){
        //no value, delete the prop!
        if(collection[id].hasOwnProperty(prop)){
            delete collection[id][prop];
            console.log('Prop deleted.');
        } else {
        //alt, it was never set, so don't do anything
        console.log('No prop, no problem!');
        }

    } else {

        //console.log(collection[id]);

        //Check for property
        if(collection[id].hasOwnProperty(prop)){
            //Property is present
            
            //is it a track?
            if(prop = 'tracks'){
                
                //are there any tracks already?
                let tracks = collection[id][prop];
                console.log(tracks);
                tracks.push(myVal);
                collection[id][prop] = tracks;
                console.log(collection[id][prop]);
            }


        } else {
            //set property

            //check if it's a track
            if(prop = 'tracks'){
            
                //if track, throw it in an array
                var myTracks = [];
                myTracks.push(myVal)
                collection[id][prop] = myTracks;
                console.log(collection[id][prop]);
            
            } else {
            // set it and forget it :D

            collection[id][prop] = myVal;

            }
        }

    }

    //console.log(collection[id]);
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "tracks", "ABBA");
updateRecords(2468, "tracks", "conda branda");
updateRecords(2548, "artist", "");