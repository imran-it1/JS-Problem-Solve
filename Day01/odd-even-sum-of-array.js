// Ekta number array theke odd even khuje odd r even er alada array and sum dibe



function oddEvenArray (arr){


    let arraySum = 0;
    
    let evenArray = [];
    let evenArraySum = 0;

    let oddArray = [];
    let oddArraySum = 0;

    for ( let element of numbers ){

        // Array er sob element er sum
        arraySum += element;

        if (element % 2 === 0) {
            // Array er even element er array creat
            evenArray.push(element);
            // Array er even element er jog
            evenArraySum += element;
        }
        else{
            oddArray.push(element);
            oddArraySum += element;
        }
    }
    


    return oddEvenArrObj = {
        even: evenArray,
        odd : oddArray,
    
        evenSum: evenArraySum,
        oddSum: oddArraySum,

        fArraySum: arraySum
    }


}


let numbers = [1, 5, 6, 2, 8, 9];
let oddArrayOutput = oddEvenArray(numbers);
console.log(oddArrayOutput);
