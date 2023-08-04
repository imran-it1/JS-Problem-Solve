// Ekta objet er value diye nicher sentence ta banate hobe
// Amr nam Imran, amr bari Rajbari, amr boyos 25.


function myInformation(info){
    let sentence = 'Amr nam '+info.name+', amr bari '+info.address+', amr boyos '+info.age;
    return sentence;
}




let myInfo = {
    name: 'Imran',
    age: 25,
    address: 'Rajbari'
}


let output = myInformation(myInfo);
console.log(output);