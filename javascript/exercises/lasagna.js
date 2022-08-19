/* Exercise Lasagna by Exercism
--------------------------------
Instructions
Lucian's girlfriend is on her way home, and he hasn't cooked their anniversary dinner!

In this exercise, you're going to write some code to help Lucian cook an exquisite lasagna from his favorite cookbook.

You have four tasks related to the time spent cooking the lasagna. */

const expected_minutes_in_oven = 40; 

/* 2. Calculate the remaining oven time in minutes
Implement the remainingMinutesInOven function that takes the actual minutes the lasagna has been in the oven as a parameter and returns how many minutes the lasagna still has to remain in the oven, based on the expected oven time in minutes from the previous task. */

function remainingMinutesInOven(actual_minute) {
    let time = expected_minutes_in_oven - actual_minute;

    if (time > 0) {
        return console.log(time);
    } if(time == 0) {
        return console.log("Finish! Take out of the oven!");
    } else {
        return console.log("Oh, no! Time passed.");
    }
}

/* 3. Calculate the preparation time in minutes
Implement the preparationTimeInMinutes function that takes the number of layers you added to the lasagna as a parameter and returns how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare. */

function preparationTimeInMinutes(layers) {
    return layers * 2;
}

/* 4. Calculate the total working time in minutes
Implement the totalTimeInMinutes function that takes two parameters: the numberOfLayers parameter is the number of layers you added to the lasagna, and the actualMinutesInOven parameter is the number of minutes the lasagna has been in the oven. The function should return how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment. */

function totalTimeInMinutes(actualLayers, actualMinutes) {
    return console.log((preparationTimeInMinutes(actualLayers)) + actualMinutes);
}

// Finish!