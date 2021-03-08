module.exports = function toReadable(number) {
    firstNumber = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    oneNumber = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    twoNumber = [
        "",
        " ",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    ten = "ten";
    if (number >= 0 && number <= 9) {
        return firstNumber[number];
    } else if (number >= 10 && number <= 19) {
        // 1 block
        return oneNumber[number % 10];
    } else if (number > 19 && number < 100) {
        //2 block
        if (Number.isInteger(number / 10)) {
            return twoNumber[number / 10];
        } else {
            return (
                twoNumber[Math.floor(number / 10)] +
                " " +
                firstNumber[number % 10]
            );
        }
    } else if ((number) => 100 && number <= 1000) {
        if (
            number == 110 ||
            number == 210 ||
            number == 310 ||
            number == 410 ||
            number == 510 ||
            number == 610 ||
            number == 710 ||
            number == 810 ||
            number == 910
        ) {
            return firstNumber[Math.floor(number / 100)] + " hundred " + "ten";
        }
        if (firstNumber[Math.floor(number % 10)] === "zero") {
            return (
                firstNumber[Math.floor(number / 100)] +
                " hundred " +
                twoNumber[Math.floor((number % 100) / 10)]
            ).trim();
        } else if (
            twoNumber[Math.floor((number % 100) / 10)] === twoNumber[0] &&
            twoNumber[Math.floor((number % 100) / 10)] != twoNumber[1]
        ) {
            return (
                firstNumber[Math.floor(number / 100)] +
                " hundred " +
                firstNumber[Math.floor(number % 10)]
            );
        } else if (firstNumber[Math.floor(number % 10)] === "zero") {
            return (firstNumber[Math.floor(number / 100)] + " hundred").trim();
        } else if (
            twoNumber[Math.floor((number % 100) / 10)] === twoNumber[1]
        ) {
            return (
                firstNumber[Math.floor(number / 100)] +
                " hundred " +
                oneNumber[(number % 100) % 10]
            );
        } else if (
            twoNumber[Math.floor((number % 100) / 10)] != "zero" &&
            firstNumber[Math.floor(number % 10)] != "zero"
        ) {
            return (
                firstNumber[Math.floor(number / 100)] +
                " hundred " +
                twoNumber[Math.floor((number % 100) / 10)] +
                " " +
                firstNumber[Math.floor(number % 10)]
            );
        }
    }
};
