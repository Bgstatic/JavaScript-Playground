function RaceDay(age, isRegistered){

    let raceNumber = Math.floor(Math.random() * 1000);
    
    if(isRegistered && age > 18){
    
      raceNumber += 1000;
    }
    
    if(age > 18 && isRegistered){
    
        console.log("You will race at 9.30 AM with your race number: " + raceNumber);
    }
    else if(age > 18 && !isRegistered){
    
        console.log("You will race at 11.00 AM with your race number: " + raceNumber);
    }
    else if(age < 18){
    
    console.log("Youth registrants run at 12:30 PM (regardless of registration)");
    
    }
    else{
    
      console.log("See the registration desk");
    }
    
}

RaceDay(15,true);