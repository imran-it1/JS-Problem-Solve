/**
 * Sum of an array item/element
 */


function sumOfArray (array){

    let sum = 0;
    // for of kore array er prottekta item/element ke acces kora jay
    for ( let item of array ){
        // Amra to index dhorci na je seta dhore item gulo pabo. Amra direct item gulo kei access korteci. So array[item] bolar dorkar nai.
        // console.log(array[item]);

        // Loop kore prottek ta element dhorteci ar jog korteci
        sum += item;
        // Loop hoye array er ek ekta value pabo ar seta sum er sathe jog kore store korbo
    }
    return sum;
}

const number = [11, 17, 33, 34, 15, 16];
let output = sumOfArray(number);
console.log(output);