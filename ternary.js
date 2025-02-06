

/*
    Ternary --> three parts
*/

const age = 20;
if (age >= 18){
    console.log('You can vote.')
}
else{
    console.log("Gumai thako")
}

// Ternari in one line code
// Condition ? do somthing when true : do something when false

age >= 17 ? console.log('Vote dio') : console.log("Gumai Thako")


// normal ternary 

let price = 1500;
const isLeader = true;

// if(isLeader === true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }
// // console.log(price) 

// price = isLeader === true ? 0 : price + 100;
// // console.log(price) 

// //Semi-Advanced ternary

// if(isLeader === true){
//     if(price > 1000){
//         price = price / 2;
//     }
//     else {
//         price = 0;
//     }
// }
// else{
//     price = price + 100;
// }

// short hand ternary 

// price = isLeader === true ? 0 : price + 100;

// feel free to ignore this one 
price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;
console.log(price)