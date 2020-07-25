const rainSelect = document.querySelector('.rainPanel')
const rainArgs={
  speed: 5, // 1<= speed <=5
  intensity:5, // 1<= intensity <=5
  width: parseInt(rainSelect.clientWidth),
  height: parseInt(rainSelect.clientHeight),
  x: 0,
  y: 0,
  color: 'blue',
}
const rain = aniWeather().aniRain(rainArgs);
rainSelect.innerHTML = rain;

const snowSelect = document.querySelector('.snowPanel')
const snowArgs={
  speed: 3, // 1<= speed <=5
  intensity:3, // 1<= intensity <=5
  width: parseInt(snowSelect.clientWidth),
  height: parseInt(snowSelect.clientHeight),
  x: 0,
  y: 0,
}
const snow = aniWeather().aniSnow(snowArgs);
snowSelect.innerHTML = snow;
