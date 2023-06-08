/**
 * Checks if a number is a valid credit card number.
 * @param {String} cardNumber
 * @returns {String}
 */
function isCreditCardValid(cardNumber) {
    if (cardNumber == "" || cardNumber.length <= 14 || cardNumber.length >= 17)
        return "This card number is not valid.";
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        let c = parseInt(cardNumber.charAt(i));
        if (i & 1) { // odd
            c *= 2;
            if (c > 9) 
                c = 1 + (c % 10);
        }
        sum += c;
    }
    if (sum % 10 != 0)
        return "This card number is not valid.";
    return "This card number is valid.";
}

/*
sum += (i & 1)?
    (c * 2 > 9)? 
        1 + (c * 2 % 10)
        : c * 2
    : c
*/

let num = "";
console.log(num, isCreditCardValid(num));
num = "71516394042069";
console.log(num, isCreditCardValid(num));
num = "71516394042069000";
console.log(num, isCreditCardValid(num));
num = "4102080860435620";
console.log(num, isCreditCardValid(num));
num = "4102080880435620";
console.log(num, isCreditCardValid(num));

// UI logic

window.onload = function () {
    const form = document.querySelector('form');
    form.onsubmit = function(event) {
        event.preventDefault();
        const Ipt = document.getElementById("cardInput").value;
        const message = isCreditCardValid(Ipt);
        document.querySelector('.valid-message').innerHTML = message;
    }
}