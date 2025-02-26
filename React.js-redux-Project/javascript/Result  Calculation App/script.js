function calculateResult() {
    let usernumber = document.getElementById('number').value;
    let percentage = usernumber / 750 * 100;
    if (percentage >= 80) {
        alert("You got A+ congrates")
    } else if (percentage >= 70) {
        alert("You got Agrade congrates")
    } else if (percentage >= 60) {
        alert("You got Bgrade congrates")
    } else if (percentage >= 50) {
        alert("You got Cgrade congrates")
    } else if (percentage >= 40) {
        alert("You got Dgrade congrates")
    } else if (percentage >= 10) {
        alert("sorry to say you are fail")
    }
    console.log(usernumber)
    console.log (percentage)
}

// function calculateResult(){
//     let usernumber = document.getElementById('number').value
//     let percentage = usernumber/750*100;
//     if(percentage >= 80){
//         alert("you got A+ congrats")
//     }
//     console.log(percentage);
//     console.log(usernumber);
// }