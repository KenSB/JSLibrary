"use strict";

const rainSelect = document.querySelector('.rainFrame')
const rainArgs={
  speed: 5, // 1<= speed <=5
  intensity:5, // 1<= intensity <=5
  width: parseInt(rainSelect.clientWidth),
  height: parseInt(rainSelect.clientHeight),
  x: 0,
  y: 0,
  color: 'blue',
  clouds: true,
  lightning: false
}
const rainSelect2 = document.querySelector('.rainFrame2')
const rainArgs2={
  speed: 5, // 1<= speed <=5
  intensity:5, // 1<= intensity <=5
  width: parseInt(rainSelect2.clientWidth),
  height: parseInt(rainSelect2.clientHeight),
  x: 0,
  y: 0,
  color: 'blue',
  clouds: true,
  lightning: true
}

const snowSelect = document.querySelector('.snowFrame')
const snowArgs={
  speed: 3, // 1<= speed <=5
  intensity:3, // 1<= intensity <=5
  width: parseInt(snowSelect.clientWidth),
  height: parseInt(snowSelect.clientHeight)- 50,
  x: 0,
  y: 0,
  clouds: true
}

const clearSelect = document.querySelector('.sky')
const clearArgs={
  time: 24,
  width: parseInt(clearSelect.clientWidth),
  height: parseInt(clearSelect.clientHeight),
  x: 0,
  y: 0,
  clouds: false
}

// const fogSelect = document.querySelector('.fogSection')
// const fogArgs={
//   greyness:3,
//   speed: 5, // 1<= speed <=5
//   intensity:3, // 1<= intensity <=5
//   width: parseInt(fogSelect.clientWidth),
//   height: parseInt(fogSelect.clientHeight),
//   x: 0,
//   y: 0,
// }

function landing() {
  const animateW = new AniWeather();

  const rain = animateW.aniRain(rainArgs);
  rainSelect.innerHTML = rain;
  const rain2 = animateW.aniRain(rainArgs2);
  rainSelect2.innerHTML = rain2;

  const snow = animateW.aniSnow(snowArgs);
  snowSelect.innerHTML = snow;

  const clear =animateW.aniClear(clearArgs);
  clearSelect.innerHTML = clear;

  // const fog = animateW.aniFog(fogArgs);
  // fogSelect.innerHTML = fog;
}
landing();

const timeSelect = document.querySelector('.timer')
let totalHours = 0;
setInterval(setTimer,1000)
function setTimer(){
  ++totalHours;
  if(totalHours > 23){
    totalHours = 0;
  }
  timeSelect.innerHTML = totalHours+":00";
}
