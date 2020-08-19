// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];


  planets.forEach(function(element) {
    var something = document.createElement("OPTION");
    var newContent = document.createTextNode(element[0]);
    something.appendChild(newContent);
    document.getElementById("planets").appendChild(something)

  })


function calculateWeight(userWeight, planetName) {
  var i;
    for (i = 0; i < planets.length; i++){
      if (planets[i][0] == planetName) {
        return (planets[i][1] * userWeight)
        }
      }
    }
 
    function handleClickEvent(e) {
      var userWeight = document.getElementById("user-weight").value;
      var planetName = document.getElementById("planets").value;
      var result = calculateWeight(userWeight, planetName)
      document.getElementById("output").innerHTML = "If you were on " + planetName + ", you would weigh " + result + "lbs!"
    }
  