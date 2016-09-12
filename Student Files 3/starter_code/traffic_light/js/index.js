//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(start);


function start() {
  $('#stopButton').click(turnRedLightOn);
  $('#slowButton').click(turnYellowLightOn);
  $('#goButton').click(turnGreenLightOn);
}

function resetLights(){
  turnRedLightOff();
  turnYellowLightOff();
  turnGreenLightLightOff();
}

function setLightColor (light, color) {
  light.css('backgroundColor', color);
}

//RED LIGHT
function turnRedLightOn() {
  resetLights();
  setLightColor ($('#stopLight'), 'red');
}

function turnRedLightOff() {
  setLightColor ($('#stopLight'), 'black');
}

//YELLOW LIGHT
function turnYellowLightOn() {
  setLightColor ($('#slowLight'), 'yellow');
}
function turnYellowLightOff(){
  resetLights();
  setLightColor ($('#slowLight'), 'black');
}

//GREEN LIGHT
function turnGreenLightOn() {

}

function turnGreenLightLightOff(){

}
