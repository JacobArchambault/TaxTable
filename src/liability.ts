function displayLiability() {
    let income = document.getElementById("income")["value"];
    if (lowestBracket(income)) {
        display(asCurrency(lowestLiability(income)));
    }
    else if (bracketTwo(income)) {
        display(asCurrency(bracketTwoLiability(income)));
    }
    else if (bracketThree(income)) {
        display(asCurrency(bracketThreeLiability(income)));
    }
    else if (bracketFour(income)) {
        display(asCurrency(bracketFourLiability(income)));
    }
    else if (bracketFive(income)) {
        display(asCurrency(bracketFiveLiability(income)));
    }
}
function isBetween(number: number, lowValue: number, highValue: number) {
    return number >= lowValue && number < highValue;
}
function lowestBracket(number: number) {
    return isBetween(number, 0, 27050);
}
function bracketTwo(number: number) {
    return isBetween(number, 27050, 65550);
}
function bracketThree(number: number) {
    return isBetween(number, 65550, 136750);
}
function bracketFour(number: number) {
    return isBetween(number, 136750, 297350);
}
function bracketFive(number: number) {
    return number >= 297350;
}
function lowestLiability(gross: number) {
    return gross * 0.15;
}
function bracketTwoLiability(gross: number) {
    return 4057.5 + (gross - 27050) * 0.275;
}
function bracketThreeLiability(gross: number) {
    return 14654 + (gross - 65550) * 0.305;
}
function bracketFourLiability(gross: number) {
    return 36361 + (gross - 136750) * 0.355;
}
function bracketFiveLiability(gross: number) {
    return 93374 + (gross - 297350) * 0.391;
}
function display(displayValue: string) {
    document.getElementById("taxable-amount")["value"] = displayValue;
}
function asCurrency(number: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number);
}
