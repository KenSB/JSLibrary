const rainSelect = document.querySelector('.rainSection')
const rainArgs={
  speed: 5, // 1<= speed <=5
  intensity:5, // 1<= intensity <=5
  width: parseInt(rainSelect.clientWidth),
  height: parseInt(rainSelect.clientHeight),
  x: 0,
  y: 0,
  color: 'blue',
  clouds: true,
  lightning: true
}
const rain = aniWeather().aniRain(rainArgs);
rainSelect.innerHTML = rain;

const snowSelect = document.querySelector('.snowSection')
const snowArgs={
  speed: 3, // 1<= speed <=5
  intensity:3, // 1<= intensity <=5
  width: parseInt(snowSelect.clientWidth),
  height: parseInt(snowSelect.clientHeight)- 50,
  x: 0,
  y: 0,
  clouds: true
}
const snow = aniWeather().aniSnow(snowArgs);
snowSelect.innerHTML = snow;

const clearSelect = document.querySelector('.clearSection')
const clearArgs={
  time: 5,
  width: parseInt(clearSelect.clientWidth),
  height: parseInt(clearSelect.clientHeight),
  x: 0,
  y: 0,
  clouds: true
}
const clear = aniWeather().aniClear(clearArgs);
clearSelect.innerHTML = clear;

const fogSelect = document.querySelector('.fogSection')
const fogArgs={
  greyness:3,
  speed: 5, // 1<= speed <=5
  intensity:3, // 1<= intensity <=5
  width: parseInt(fogSelect.clientWidth),
  height: parseInt(fogSelect.clientHeight),
  x: 0,
  y: 0,
}
const fog = aniWeather().aniFog(fogArgs);
fogSelect.innerHTML = fog;
