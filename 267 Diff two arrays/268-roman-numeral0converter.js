// break down to 1000, 100, 10, 1
//convertToRoman(36);

var romNums = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM'
}

var thousands = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
}


function convertToRoman(num) {
   
    var thousand = '';
    var hundred = '';
    var ten = '';
    var one = '';

    var str = num.toString();

    var rom = str.split("");

    console.log('rom length: ' + rom.length);

    if(rom.length == 4){

        if(rom[0] != 0) {
        rom[0] += '000';
        }

        if(rom[1] != 0) {
        rom[1] += '00';
        }

        if(rom[2] != 0) {
        rom[2] += '0';
        }

    } else if (rom.length == 3){

        if(rom[0] != 0) {
        rom[0] += '00';
        }

        if(rom[1] != 0) {
        rom[1] += '0';
        }

    } else if (rom.length == 2){

        if(rom[0] != 0) {
        rom[0] += '0';
        }
  

    } else {

    }

    var romNom = '';

    for(i=0;i<rom.length;i++){

        //console.log(rom);
        //what are we trying to do?
        // 4 numbers
        //split them up.
        //then find the one,ten,hundred,thousand
        romNom += romNums[rom[i]];

    }

    num = romNom;

    return num;
}

var look = convertToRoman(500);

console.log(look);

