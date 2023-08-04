// Function a amra parameter input hisabe nei. Input ta user ra jeta dilo seta ki think dilo kina seta validate korar dorkar hoy onek somoy. Input parameter hisabe chailam number, halay dilo string, bollean, taile halare bolte hobe je number handa.


// Number valodation. Number chara onno kicu deya jabe na


function add (a, b){

    if ( typeof a !== 'number' || typeof b !== 'number' ){

        //Majhe && use korle ekta pb hobe. && mane suitai true hote hobe na hole er modde dhukbe na. Tahole ekta number r ekta string/ onno kono data type dile to er moddhe dhukbe na. Kintu amra chacchi jekono ekta jodi number bade onno kono data type hoy taholei jeno er moddhe duke message ta return kore.

        // Number na hole ei string ta return kore diye function theke ber hoye jabe
        return "Please enter two number 😒😒"
    }

    let total = a + b;
    return total;
}


let output = add(3, '4');
console.log(output);