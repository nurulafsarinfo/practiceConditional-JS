// reslt grading
let userInput = prompt("Please enter your result: ");
if(userInput >= 80){
    console.log("Your grade is : A+");
}
else if(userInput >= 75) {
    console.log("Your grade is: A")
}
else if(userInput >= 65) {
    console.log("Your grade is: A-")
}
else if(userInput >= 50) {
    console.log("Your grade is: B+")
}
else if(userInput >= 40) {
    console.log("Your grade is: B")
}
else if(userInput >= 33){
    console.log("Your grade is: C")
}
else{
    console.log("Oops, You failed !!!")
}