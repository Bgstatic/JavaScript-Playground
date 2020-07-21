function DogYears(myAge, myName){

let earlyYears = 2;

earlyYears = earlyYears * 10.5;

let laterYears = myAge - 2;

laterYears *= 4;

var myAgeInDogYears = earlyYears + laterYears;

var myName = myName.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

}

DogYears(21,"John");