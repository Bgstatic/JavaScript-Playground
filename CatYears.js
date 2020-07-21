function CatYears(myAge,myName) {

    var earlyYears = 2;
    earlyYears *= 25;
    var laterYears = myAge - 2;
    laterYears *= 4;
    var myAgeInCatYears = earlyYears + laterYears;
    
    console.log("My name is " + myName + ". I am " + myAge + " years old in human years which is " 
                 + myAgeInCatYears + " years old in cat years.");
}

CatYears(20,"Mike");