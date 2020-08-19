const rainSelect = document.querySelector('.rainSection')
const rainArgs={
  speed: 5, // 1<= speed <=5
  intensity:5, // 1<= intensity <=5
  width: parseInt(rainSelect.clientWidth),
  height: parseInt(rainSelect.clientHeight) - 10,
  x: 0,
  y: 0,
  color: 'blue',
}
const rain = aniWeather().aniRain(rainArgs);
rainSelect.innerHTML = rain;

const lightningArgs={
  intensity:5, // 1<= intensity <=5
  width: parseInt(rainSelect.clientWidth),
  height: parseInt(rainSelect.clientHeight) - 10,
  x: 0,
  y: 0,
  color: 'blue',
}
const lightningSelect = document.querySelector('.lightningSection')
lightningSelect.innerHTML = aniWeather().aniLightning(lightningArgs);

const snowSelect = document.querySelector('.snowSection')
const snowArgs={
  speed: 3, // 1<= speed <=5
  intensity:3, // 1<= intensity <=5
  width: parseInt(snowSelect.clientWidth),
  height: parseInt(snowSelect.clientHeight)- 50,
  x: 0,
  y: 0,
}
const snow = aniWeather().aniSnow(snowArgs);
snowSelect.innerHTML = snow;

const clearArgs={
  time: 10
}
const clearSelect = document.querySelector('.clearSection')
clearSelect.innerHTML = aniWeather().aniClear(clearArgs);

const fogArgs={
  greyness:3,
  speed: 5, // 1<= speed <=5
  intensity:3, // 1<= intensity <=5
  width: parseInt(snowSelect.clientWidth),
  height: parseInt(snowSelect.clientHeight),
  x: 0,
  y: 0,
}
const fogSelect = document.querySelector('.fogSection')
fogSelect.innerHTML = aniWeather().aniFog(fogArgs);
