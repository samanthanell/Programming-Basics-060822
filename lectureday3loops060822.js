// Let's talk about loops!
var num = 1
if(num > 1) {
    console.log("num is greater than 1");
    //var x = 1;
}


// ++ is the same as saying x = x + 1
var x = 1
for(var i = 0; i < 10; i++) {
    // This will increment the variable x by 1 each time the loop runs

    x++;
    console.log("The variable x is " + x);
}

var x = 1

console.log("The number is " + x);

console.log("The number is " + (x+1))
console.log("The number is " + (x+2))



var x = 1
for(var i = 0; i < 10; i++) {
    // This will increment the variable x by 1 each time the loop runs

    x++;
    console.log("The variable x is " + x);
}



// Console log the string "Hello World" 5 times

// var phrase = "Hello World"
var x = 0
for(i = 0; i < 5; i++) {
    x += 3
    console.log(x)
}

function printPhrase(phrase, times) {

    for(i = 0; i < times; i++) {
        console.log(phrase)
        for(j = 0; j < 5; j++) {
            console.log("Hello from the nested for loop!")
        }
    }

}

printPhrase("This is the phrase!", 2)




// Difference between a while loop and a for loop
var num = 0;    // start a variable at 0
while (num <= 5) {    
    console.log(num);    // print the current value of num    
    num++;       // increment num by 1
}

function doThing(num) {
    //var num = 0;    // start a variable at 0
    while (num <= 5) {    
        console.log(num);    // print the current value of num    
        num++;       // increment num by 1
    }
    console.log("Stop logging the num")
}
doThing(4)

function keepScore(score1, score2) {
    while(score1 < 10 && score2 < 10) {
        console.log("********************")
        console.log("Score 1: " + score1)
        console.log("Score 2: " + score2)
        console.log("********************")

        score1++
        score2++
    }

    if(score1 > score2) {
        console.log("********************")
        console.log(`
        __        ___
        / o\      /o o\
        |   <     |   |
        \__/      |,,,|
        `)
        console.log("********************")

    }
    else {
        console.log("********************")
        console.log("Score 2 is the winner!")
        console.log("********************")

    }
}

keepScore(4, 3)