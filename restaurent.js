
const age = 67;
const price = 500;

if (age <= 12){
    console.log("You can eat for free");
}
else if (age >= 60){
    // 50 % discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log('Your payAmount is-> '+payAmount);
}
else if (age >= 45){
    const discount = price * 25 / 100;
    console.log(discount)
}
else {
    console.log(price);
}