function displayLiability() {
    let income = document.getElementById("income").value;
    if (lowestBracket(income)){
        display(lowestLiability(income));
    }
    else if (bracketTwo(income)){
        display(bracketTwoLiability(income));
    }
    else if (bracketThree(income)){
        display(bracketThreeLiability(income));
    }
    else if (bracketFour(income)){
        display(bracketFourLiability(income));
    }
    else if (bracketFive(income)){
        display(bracketFiveLiability(income));
    }            
}
function isBetween(number, lowValue, highValue) {
    return number >= lowValue && number < highValue;
}
function lowestBracket(number) {
    return isBetween(number, 0, 27050);
}
function bracketTwo(number) {
    return isBetween(number, 27050, 65550);
}
function bracketThree(number) {
    return isBetween(number, 65550, 136750);
}
function bracketFour(number) {
    return isBetween(number, 136750, 297350);
}
function bracketFive(number) {
    return number >= 297350;
}
function lowestLiability(gross) {
    return gross * 0.15;
}
function bracketTwoLiability(gross) {
    return 4057.5 + (gross - 27050) * 0.275;
}
function bracketThreeLiability(gross) {
    return 14654 + (gross - 65550) * 0.305;
}
function bracketFourLiability(gross) {
    return 36361 + (gross - 136750) * 0.355;
}
function bracketFiveLiability(gross) {
    return 93374 + (gross - 297350) * 0.391;
}
function display(number){
    document.getElementById("taxable-amount").value = number;        
}
