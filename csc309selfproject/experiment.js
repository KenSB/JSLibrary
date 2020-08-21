const rainSelect = document.querySelector('.rainPanel')
const rainArgs={
  speed: 5, // 1<= speed <=5
  intensity:5, // 1<= intensity <=5
  width: parseInt(rainSelect.clientWidth),
  height: parseInt(rainSelect.clientHeight),
  x: 0,
  y: 0,
  color: 'blue', // any valid html color
  clouds: true,
  lightning: true
}

function rainSpeed(speed){
  rainArgs.speed=speed;
  examples(1);
}
function rainIntensity(intensity){
  rainArgs.intensity=intensity;
  examples(1);
}
function rainColor(color){
  if(color === 1){
    rainArgs.color="white";
  }
  else if (color === 2) {
    rainArgs.color="black";
  }
  else if (color === 3) {
    rainArgs.color="red";
  }
  else if (color === 4) {
    rainArgs.color="blue";
  }
  examples(1);
}
function rainClouds(clouds){
  rainArgs.clouds=clouds;
  examples(1);
}
function rainLightning(lightning){
  rainArgs.lightning=lightning;
  examples(1);
}

const snowSelect = document.querySelector('.snowPanel')
const snowArgs={
  speed: 3, // 1<= speed <=5
  intensity:3, // 1<= intensity <=5
  width: parseInt(snowSelect.clientWidth),
  height: parseInt(snowSelect.clientHeight),
  x: 0,
  y: 0,
  clouds: true
}
function snowSpeed(speed){
  snowArgs.speed=speed;
  examples(2);
}
function snowIntensity(intensity){
  snowArgs.intensity=intensity;
  examples(2);
}
function snowClouds(clouds){
  snowArgs.clouds=clouds;
  examples(2);
}

const clearSelect = document.querySelector('.clearPanel')
const clearArgs={
  time: 5,
  width: parseInt(clearSelect.clientWidth),
  height: parseInt(clearSelect.clientHeight),
  x: 0,
  y: 0,
  clouds: true
}
function clearTime(time){
  clearArgs.time=time;
  examples(3);
}
function clearClouds(clouds){
  clearArgs.clouds=clouds;
  examples(3);
}

const fogSelect = document.querySelector('.fogPanel')
const fogArgs={
  greyness:3,
  speed: 5, // 1<= speed <=5
  intensity:3, // 1<= intensity <=5
  width: parseInt(fogSelect.clientWidth),
  height: parseInt(fogSelect.clientHeight),
  x: 0,
  y: 0,
}
function fogGreyness(greyness){
  fogArgs.greyness=greyness;
  examples(4);
}
function fogSpeed(speed){
  fogArgs.speed=speed;
  examples(4);
}
function fogIntensity(intensity){
  fogArgs.intensity=intensity;
  examples(4);
}


function buildRain(animateW){
  const rain = animateW.aniRain(rainArgs);
  rainSelect.innerHTML = rain;
}
function buildSnow(animateW){
  const snow = animateW.aniSnow(snowArgs);
  snowSelect.innerHTML = snow;
}
function buildClear(animateW){
  const clear =animateW.aniClear(clearArgs);
  clearSelect.innerHTML = clear;
}
function buildFog(animateW){
  const fog = animateW.aniFog(fogArgs);
  fogSelect.innerHTML = fog;
}
function examples(build) {
  const animateW = new AniWeather();
  if(build === 0||build === 1){
    buildRain(animateW);
  }
  if(build === 0||build === 2){
    buildSnow(animateW);
  }
  if(build === 0||build === 3){
    buildClear(animateW);
  }
  if(build === 0||build === 4){
    buildFog(animateW);
  }
}
examples(0);
