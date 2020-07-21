

const getSleepHours = day => {  //  My weekly sleep hours. 

    if (day.toLoweCase() === "monday") {

        return 8;
    }
    else if (day.toLoweCase() === "tuesday") {

        return 7;
    }
    else if (day.toLoweCase() === "wednesday") {

        return 8;
    }
    else if (day.toLoweCase() === "thursday") {

        return 9;
    }
    else if (day.toLoweCase() === "friday") {

        return 8;
    }
    else if (day.toLoweCase() === "saturday") {

        return 9;
    }
    else if (day.toLoweCase() === "sunday") {

        return 7;
    }


};

const getActualSleepHours = () => {

    var sum = getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") +
        getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");

};

const getIdealSleepHours = () => {

    var idealHours = 7; // Ideal hours per night for me.

    return idealHours * 7;

};

const calculateSleepDebt = () => {

    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours();

    if (idealSleepHours == actualSleepHours) {

        console.log("Perfect amount of sleep.");
    }
    else if (actualSleepHours > idealSleepHours) {

        console.log("User got more sleep than needed.");
    }
    else if (actualSleepHours < idealSleepHours) {

        console.log("User should get some rest.")
    }

}