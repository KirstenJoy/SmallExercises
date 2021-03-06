// create an array of students and their exam result
var person = [
    ["John", "Joe", 88],
    ["James", "Johnson", 45],
    ["Anne", "Phillips", 59],
    ["Phillip", "Black", 82],
    ["Jane", "Green", 65],
    ["Bell", "Lopez", 78],
    ["Jerry", "James", 96],
    ["Anne", "Taylor", 53],
    ["Martin", "Rivera", 35],
    ["Jesse", "Smith", 43],
    ["Sammy", "Anderson", 62],
    ["Robert", "Reynolds", 42],
    ["Kris", "Nelson", 76],
    ["Paul", "Owens", 90],
    ["Frank", "Foster", 63]
];
// initialize counter variables to store number of grades at each level 			
var counter_a = 0;
var counter_b = 0;
var counter_c = 0;
var counter_d = 0;
var counter_f = 0;
var letter;
// loop through array testing if the student's mark is greater than or equal to 70
for (var i = 0; i < person.length; i++) {
    if (person[i][2] >= 70) {
        // increment counter variable with A grade	
        counter_a++;
        letter = 'A';
        // output array values to screen specifying which column to be output
        document.write(person[i][0][0] + person[i][1][0] + "&nbsp;&nbsp;&nbsp;&nbsp;" + person[i][2] + "%" + "&nbsp;&nbsp;&nbsp;&nbsp;" + letter + "<br>");
        // loop through array testing if the student's mark is greater than or equal to 60
    } else if (person[i][2] >= 60) {
        // increment counter variable with B grade	
        counter_b++;
        letter = 'B';
        document.write(person[i][0][0] + person[i][1][0] + "&nbsp;&nbsp;&nbsp;&nbsp;" + person[i][2] + "%" + "&nbsp;&nbsp;&nbsp;&nbsp;" + letter + "<br>");

    } else if (person[i][2] >= 50) {
        counter_c++;
        letter = 'C';
        document.write(person[i][0][0] + person[i][1][0] + "&nbsp;&nbsp;&nbsp;&nbsp;" + person[i][2] + "%" + "&nbsp;&nbsp;&nbsp;&nbsp;" + letter + "<br>");

    } else if (person[i][2] >= 45) {
        counter_d++;
        letter = 'D';
        document.write(person[i][0][0] + person[i][1][0] + "&nbsp;&nbsp;&nbsp;&nbsp;" + person[i][2] + "%" + "&nbsp;&nbsp;&nbsp;&nbsp;" + letter + "<br>");

    } else {
        counter_f++;
        letter = 'F';
        document.write(person[i][0][0] + person[i][1][0] + "&nbsp;&nbsp;&nbsp;&nbsp;" + person[i][2] + "%" + "&nbsp;&nbsp;&nbsp;&nbsp;" + letter + "<br>");

    }
}
// output counter values for each level of grade
document.write("<br>Number of A passes " + counter_a + "<br>" + "Number of B passes " + counter_b + "<br>" + "Number of C passes " + counter_c + "<br>" + "Number of D passes " + counter_d + "<br>" + "Number of fails " + counter_f + "<br>");
