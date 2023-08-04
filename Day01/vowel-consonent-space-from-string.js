// Ekta string er moddhe koyta vowel, consonent and faka space ace seta ber korte hobe


function  findVowelConsoSpaceCheck (sentence){

    // Validation

    if( typeof sentence !== 'string' ){
        return 'Please prove me a valid string 😑😊'
    }

    // Jehetu gunbo, tai gune ekjayga rakhte to hobe tar jonno.....
    let vowelCount = 0;
    let consonentCount = 0;
    let spaceCount = 0;


    let vowelArray = [];
    let consonentArray =[];

    for ( i = 0; i < sentence.length; i++ ){
        // Jodi kono word capital letter a thake!! Setar jonno alada if else lekha jay tar theke valo, word jemon e hok seta jani hoy capital va small a hoye tarpor checking er moddhe diye jay seta korle valo hoy. tar moddhe string a ekta build in method ace called (.toLowerCase) Eta use kora besi effective.
        let char = sentence[i].toLowerCase(); // Don't forget to give () after toLowerCase
        // mile gele seta ke vowel hisabe dhorbe
        if ( char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ) {
            // ekhane vowelCount = char dile vul hobe, karon amra gunci koto gulo pabo, kono kicu jog korci na, abar eta number er string o na.
            vowelCount++;
            vowelArray.push(char);
        }
        // Jodi seta faka space na hoy seta ke cosonent hisabe dhorbe
        else if ( char !== ' ' ){
            consonentCount++
            consonentArray.push(char);
        }
        // Consonent o jodi na hoy seta faka space hisabe gonno hobe
        else{
            spaceCount++;
        }
    }

    return vCSObj ={
        vowel: vowelCount,
        consonent: consonentCount,
        space: spaceCount,
        vArray: vowelArray,
        cArray: consonentArray
    }
}

const sentence = 'The name of our country is Bangladesh'
let output = findVowelConsoSpaceCheck(sentence);
console.log(output);