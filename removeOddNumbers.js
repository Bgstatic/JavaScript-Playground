 var checkodd = (param) => {

    return param % 2 != 0;

 }

function removeOddNumbers(numberArray){
    
   var evenArr = numberArray.filter(checkodd);
   console.log(evenArr);
}

var numbers = [1, 2, 3, 4, 5, 6, 7];

removeOddNumbers(numbers);
