function getUserChoice(userInput) {

    userInput = userInput.toLowerCase();

    if (userInput !== "bear" || userInput !== "human" || userInput !== "gun") {

        console.log("Please enter valid input.");

    } else {

        return userInput;

    }
}

function getComputerChoice() {

    var randomNumber = Math.floor(Math.random * 3);

    if (randomNumber === 0) {

        return "bear";

    } else if (randomNumber === 1) {

        return "human";
    }
    else {

        return "gun";
    }
}

function determineWinner(userChoice, computerChoice){

    if(userChoice === computerChoice){

        return "The game is a tie";
    }
    if(userChoice === "human"){

        if(computerChoice === "bear"){

            return "Computer Won.";
        }
        else{

            return "User Won.";
        }
    }
    if(userChoice === "bear"){

        if(computerChoice === "gun"){

            return "Computer Won.";
        }
        else{

            return "User Won.";
        }
    }
    if(userChoice === "gun"){

        if(computerChoice === "human"){

            return "Computer Won.";
        }
        else{

            return "User Won.";
        }
    }
    
}

function playGame(){

    var input = prompt("Please enter the input (bear, human, gun");
    var userChoice = getUserChoice(input);
    var computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice)); 
}

playGame();