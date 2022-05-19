// create array containing hockey team names number of wins, losses and draws
var teams = [
    ["Man City", 10, 6, 2],
    ["Man United", 16, 7, 5],
    ["Liverpool", 8, 3, 3],
    ["Tottenham", 15, 9, 5],
    ["Everton", 5, 10, 2],
];
// sort array values according to number of wins			
teams = teams.sort(function(a, b) {
    return b[1] - a[1];
});
// create table to hold the data	
document.write("<table class='table table-striped ' border='1' bgcolor='#9cada4' align='center'><tr align='left' ><th scope='col'>Team</th><th scope='col'>W</th><th scope='col'>D</th><th scope='col'>L</th><th scope='col'>Pts</th></tr>");
// loop through teams array	
for (var i = 0; i < teams.length; i++) {
    // multiply number of wins by 3 points
    var points = teams[i][1] * 3;
    // store number of draws
    var points2 = teams[i][2];
    // add together the wins and draws to give total points
    var points3 = points + points2;
    // output table containing points totals for wins, losses and draws and overall points total
    document.write("<tr bgcolor='#e0ece4'><td scope='row' align='left' >" + teams[i][0] + "</td><td scope='row' align='left'>" + teams[i][1] + "</td><td scope='row' align='left'>" + teams[i][2] + "</td><td scope='row' align='left'>" + teams[i][3] + "</td><td scope='row' align='left'>" + points3 + "</td></tr>");
}
document.write("</table>");
