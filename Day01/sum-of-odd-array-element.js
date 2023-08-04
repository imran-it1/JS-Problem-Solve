// Ekta array thakbe, tar moddhe theke odd number hulo khuje ber kore tar jogfol dekhate hobe


function sumOfOdd (array){
    let sum = 0;
    for ( let item of array ){
        // item % 2 !== 0 same thing
        if ( item % 2 === 1) {
            sum += item;
        }
    }
    return sum;
}


let numbers = [1,4,6,7,8,4,3,6,7,8,3,9];
let output = sumOfOdd(numbers);
console.log(output);