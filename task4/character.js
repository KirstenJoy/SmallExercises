// sentence to be modified
let str = "She says she has the ability to hear the soundtrack of your life. For oil spots on the floor, nothing beats parking a motorbike in the lounge.";
// add sentence to html element
document.getElementById("originalString").innerHTML = str;

// function to modify string
function changeString(str) {
    // initialize variables
    var randomize = "",
        len, i;
    // ensure value is a string
    str = str.toString();

    // return length of string
    len = str.length;

    // loop through string
    for (i = 0; i < len; i++) {

        // randomize string
        randPosition = Math.floor(Math.random() * str.length);

        randomize += str[randPosition];

        str = str.slice(0, randPosition) + str.slice(randPosition + 1);
    }
    return randomize;
}

var randomize = changeString(str);
// assign randomized string to html element
document.getElementById("changedString").innerHTML = randomize;

let count = 0;

// Check string still has same amount of each character

for (let val of str) {
    if (val.toLowerCase() === 'n') {
        count++;
    };
};
console.log(count);
