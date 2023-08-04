function add (number){


    // Array kina check kore Array.isArray js er build in method. Eta use kore varibale name take pass korle se check kore bole dibe je seta array kina
    if ( !Array.isArray(number) ){
        return "Please give me a number array 😒😒"
    }
    
    let sum = 0;
    for ( let items of number ){
        sum = sum + items
    }
    return sum;
}


let number = [1, 4, 5, 7, 2, 9];


// Number array bade eirokom string er array dile o kaj korbe. Karon amra just validate korci je eta array kina, kiser array seta validate kori nai.
let arr2 = ['imran', 'masum', 'monir']


let output = add(arr2);
console.log(output);