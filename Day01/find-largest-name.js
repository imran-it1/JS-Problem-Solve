// Friend er nam er ekta string er array thakbe seta theke sob theke boro nam ta ber kore ante hobe

/**
 * Prothom take sob theek boro dhore nite hobe. Then jehetu eta string er array. String er length jetar besi hobe setai boro name hobe. (string.length). Then pore seta diye ager ta replace hoye jabe.
 */


function biggestNamedFriend(friendName){

    let bigegst = friendName[0]; //masum , tarikul, mosaddek(Etar length sob theke boro)

    for ( let item of friendName ){
        if( item.length > bigegst.length ){
            bigegst = item;
        }
    }

    return bigegst;

}

let friends = ['masum', 'munna', 'arif', 'masud', 'golam', 'tarikul','mossaddek']
let output = biggestNamedFriend(friends);
console.log(output);