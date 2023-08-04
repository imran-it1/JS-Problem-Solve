// Find the largest number from an array
// Largest or smallest eisob bepare prothom take boro ba choto dhore nite hobe (Dhore nite kar baper taka jay) then tar sathe baki gulo ke compare kore kaj kora valo

//Compare kore tar theke boro pelei tokhon otake replace kore dite hobe



function findLargest (arr){
    // Dhore nilam prothom index er number tai boro(Dhore nite kar baper taka jay!!)

    let largest = arr[0]; //5, 23, 32(Last ei 32 diye replace hoye gelo)

    // Ekhon loop kore prottekta element er sathe compare kore dekhbo je asolei eta boro, naki er theke o boro number ace. Jodi thake then seta diye replace kore dibo largest er value take.

    for ( let item of arr ){
        if (item > largest) {
            largest = item;
        }
    }
    
    return largest;
}

let number = [5, 23, 11, 32, 3, 5, 10, 9];
let output = findLargest(number);
console.log(output); //32