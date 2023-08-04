// Factorial using function

function factorail (number){

    let result = 1;

    if (number === 0 || number === 1) {
        return result;
        // Factorial of 0 and 1 always return 1
    }
    else if ( number > 0 && number >1  ){
        for ( let i = number; i >= 1; i-- ){
            result = result * i; // 1*5*4*3*2*1
        }
    }
    else{
        //To check please input a negetive number 
        return "Please provide any positive number"
    }
    return result;
}

let inputNumber = 10;
let output = factorail(inputNumber);
console.log(output);