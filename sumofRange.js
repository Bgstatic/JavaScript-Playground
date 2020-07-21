function sumOfRange(number1, number2) {

    var result = 0;
    var max = Math.max(number1, number2);
    var min = Math.min(number1, number2);

    for (let index = min; index <= max; index++) {

        result += index;
    }

    return result;

}

console.log(sumOfRange(5, 2));