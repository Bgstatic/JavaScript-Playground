function inputCaloriesByDay(day) {

    day = day.toLowerCase();
    var calories;

    switch (day) {
        case "monday":
            calories = 3500;
            break;
        case "tuesday":
            calories = 3000;
            break;
        case "wednesday":
            calories = 2000;
            break;
        case "thursday":
            calories = 2500;
            break;
        case "friday":
            calories = 3500;
            break;
        case "saturday":
            calories = 1500;
            break;
        case "sunday":
            calories = 2000;
            break;

        default:
            return 0;
    }
    return calories;
}

function getTotalCalories() {

    var totalCalories = inputCaloriesByDay("monday") + inputCaloriesByDay("tuesday") +
        inputCaloriesByDay("wednesday") + inputCaloriesByDay("thursday") + inputCaloriesByDay("friday") +
        inputCaloriesByDay("saturday") + inputCaloriesByDay("sunday");

    return totalCalories;
}

function getIdealCalories() {

    var idealDailyCalories = 2000;

    return idealDailyCalories * 7;
}

function calculateHealthPlan() {

    var actualCalories = getTotalCalories();
    var idealCalories = getIdealCalories();

    if (actualCalories === idealCalories) {

        console.log("You ate just the right amount of food.");

    } else if(actualCalories > idealCalories) {

        console.log("Time to head to the gym.");
    }
    else{

        console.log("Time for seconds.");
    }
}

calculateHealthPlan();