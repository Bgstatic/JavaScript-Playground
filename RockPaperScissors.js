const getUserChoice = userInput => {

    userInput = userInput.toLowerCase();

    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {

        return userInput;
    }
    else {

        console.log("Error wrong type of input.");
    }
};
function getComputerChoice() {

    var number = Math.floor(Math.random() * 3);

    if (number == 0)
        return "rock";
    else if (number == 1)
        return "paper";
    else
        return "scissors";
}

function determineWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {

        return "Game was a tie";
    }
    if (userChoice === "rock") {

        if (computerChoice === "paper") {

            return "Computer Won";
        }
        else {

            return "User Won";
        }
    }
    else if (userChoice === "paper") {

        if (computerChoice === "scissors") {

            return "Computer Won";
        }
        else {

            return "User Won";
        }
    }
    else if (userChoice === "scissors") {

        if (computerChoice === "rock") {

            return "Computer Won";
        }
        else {

            return "User Won";
        }
    }
    else if(userChoice === "bomb"){

        return "User Won";
      }

}

function playGame(userChoice){

    var userChoice = getUserChoice(userChoice);
    var computerChoice = getComputerChoice();

    var result = determineWinner(userChoice, computerChoice);

    console.log("Result: " + result); 

}

playGame("bomb");