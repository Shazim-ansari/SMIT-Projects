const resultDiv = document.getElementById("result");

function CheakPalindrome() {
    let userInput = document.getElementById("Palindrome").value
    let normilaizedtext = userInput.toLowerCase();
    let splitstring = normilaizedtext.split("");
    let reversestring = splitstring.reverse();
    let joinArray = reversestring.join("");
    if (joinArray === userInput) {
        resultDiv.innerHTML = `Yes, "${userInput}" Is A Palindrome!`;
    } else {
        resultDiv.innerHTML = `No, "${userInput}" Is Not A Palindrome.`;
    }

}