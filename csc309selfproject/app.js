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
const rain = aniWeather().aniRain(rainArgs);
rainSelect.innerHTML = rain;

function rainSpeed(speed){
  rainArgs.speed=speed;
  rainSelect.innerHTML="";
  rainSelect.innerHTML= aniWeather().aniRain(rainArgs);
}
function rainIntensity(intensity){
  rainArgs.intensity=intensity;
  rainSelect.innerHTML="";
  rainSelect.innerHTML= aniWeather().aniRain(rainArgs);
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
  rainSelect.innerHTML="";
  rainSelect.innerHTML= aniWeather().aniRain(rainArgs);
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
const snow = aniWeather().aniSnow(snowArgs);
snowSelect.innerHTML = snow;

function snowSpeed(speed){
  snowArgs.speed=speed;
  snowSelect.innerHTML="";
  snowSelect.innerHTML= aniWeather().aniSnow(snowArgs);
}
function snowIntensity(intensity){
  snowArgs.intensity=intensity;
  snowSelect.innerHTML="";
  snowSelect.innerHTML= aniWeather().aniSnow(snowArgs);
}

const clearSelect = document.querySelector('.clearPanel')
clearSelect.innerHTML = aniWeather().aniClear();
const fogSelect = document.querySelector('.cloudPanel')
fogSelect.innerHTML = aniWeather().aniFog();
// const lightningSelect = document.querySelector('.lightningPanel')
// lightningSelect.innerHTML = aniWeather().aniLightning();
