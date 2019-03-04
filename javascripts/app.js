// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

//Commands function: You should call this function in order to execute the programm.
//E.g: commands('rffrfflfrff');
function commands(stringOFCommands){
  console.log("Original position: " + rover.direction + " [" + rover.x + "," + rover.y + "]");
  console.log("Movements:");
  
  for(var command = 0; command < stringOFCommands.length; command++){
    switch(stringOFCommands[command]) {
      case "f": // f: forward
        moveForward(rover);
        break;
      case "b": // b: backwards
        moveBackwards(rover);
        break;
      case "r": // r: turns right
        turnRight(rover);
        break;
      case "l": // l: turns left
        turnLeft(rover);
        break;
      default:
        var char = stringOFCommands[command];
        alert("WARNING!! The command '" + char + "' is not allowed")
        console.log("The string of commands should just contain l, f, b or f characters");
    }
  }
  console.log ("************************************ ");
  console.log("New position: " + rover.direction + " [" + rover.x + "," + rover.y + "]");
  console.log(rover);
}

//Left and Right movements
function turnLeft(rover){
  console.log("*** Turns Left");

  switch(rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  currentDirection();
}

function turnRight(rover){
  console.log("*** Turns Right");

  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  currentDirection();
}

//Forward and Backwards movements
function moveForward(){
  console.log("*** Fordward");

  switch(rover.direction){
      case 'N':
        rover.y = rover.y - 1;
        break;
  
      case 'E':
        rover.x = rover.x + 1;
        break;
  
      case 'S':
        rover.y = rover.y + 1;
        break;
  
      case 'W':
        rover.x = rover.x - 1;
        break;
  }
  tracksMovements();
}

function moveBackwards(rover){
  console.log("*** Backwards");

  switch(rover.direction){
      case 'N':
        rover.y = rover.y + 1;
        break;
  
      case 'E':
        rover.x = rover.x - 1;
        break;
  
      case 'S':
        rover.y = rover.y - 1;
        break;
  
      case 'W':
        rover.x = rover.x + 1;
        break;
  }
  tracksMovements();
}

//Position and Direction trackers
function currentPosition() {
  rover.travelLog.push([rover.x, rover.y]);
  console.log("=====> Rover is in position: " + "[" + rover.x + "," + rover.y + "]")
}

function currentDirection() {
  rover.travelLog.push(rover.direction);
  console.log("====> Rover goes direction: " + rover.direction);
}

function outsideTheGrid(){
  var xAxis = (rover.x < 0 || rover.x >= 10);
  var jAxis = (rover.y < 0 || rover.y >= 10);
  
  if (xAxis || jAxis ){
    return true;
  }
}

function tracksMovements(){
  var outside = outsideTheGrid();

  if (outside){
    alert("WARNING!! The Rover is outside the grid, its current position is: " + "[" + rover.x + "," + rover.y + "]");
    currentPosition();
  }else{
    currentPosition();
  }
}
