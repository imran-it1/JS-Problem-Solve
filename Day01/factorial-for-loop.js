// 5! = 5 * 4 * 3 * 2 * 1 man 1 1 kore kombe


let number = 5;
let result = 1;

//  i >= 1; 1 er theke boro ba soman

for ( i = number; i >= 1; i-- ){
    result = result * i;
    // result *= i;
}

console.log(result);