'use strict';
//getting the css in the dom
const head = document.querySelector('head');
head.innerHTML = head.innerHTML.concat(
'<link rel="stylesheet" type="text/css" href="./library/rain.css">',
'<link rel="stylesheet" type="text/css" href="./library/snow.css">',
'<link rel="stylesheet" type="text/css" href="./library/clear.css">',
'<link rel="stylesheet" type="text/css" href="./library/cloud.css">',
'<link rel="stylesheet" type="text/css" href="./library/lightning.css">')


function aniWeather(){
  //library functions
  const self = {
    aniLightning: (context)=>{
      const defaults = {
        intensity:3, // 1<= intensity <=5
        width: 1000,
        height: 500,
        x: 0,
        y: 0,
      }
      const args = Object.assign(defaults, context)
      return animateLightning(args.intensity, args.width, args.height, args.x, args.y)
    },
    aniClear: (context)=>{
      const defaults = {
        time: 12
      }
      const args = Object.assign(defaults, context)
      return animateClear(args.time)
    },
    aniCloud: (context)=>{
      const defaults = {
        greyness: 1, // 1(white)<= greyness <= 5(darkgrey)
        density: 1, // 1 <= density <= 5
        speed: 1, // 1 <= speed <= 5
        width: 1000,
        height: 500,
        x: 0,
        y: 0,
      }
      const args = Object.assign(defaults, context)
      return animateCloud(args.greyness, args.density, args.speed, args.width- 50, args.height, args.x, args.y, args.color)
    },
    aniRain: (context)=>{
      const defaults= {
        speed: 3, // 1<= speed <=5
        intensity:3, // 1<= intensity <=5
        width: 300,
        height: 300,
        x: 0,
        y: 0,
        color: 'blue',
      }
      const args = Object.assign(defaults, context)
      //error checking ranges
      try{
        if(1 > args.speed || 5 < args.speed ){
          args.speed = 3;
        }
        if(1 > args.intensity || 5 < args.intensity ){
          args.intensity = 3;
        }
      }
      catch{
        args.speed = 3;
        args.intensity = 3;
      }
      return animateRain(args.speed, args.intensity, args.width, args.height - 50, args.x, args.y, args.color)
    },
    aniSnow: (context)=>{
      const defaults= {
        speed: 3, // 1<= speed <=5
        intensity:3, // 1<= intensity <=5
        width: 300,
        height: 300,
        x: 0,
        y: 0,
      }
      const args = Object.assign(defaults, context)
      //error checking ranges
      try{
        if(1 > args.speed || 5 < args.speed ){
          args.speed = 3;
        }
        if(1 > args.intensity || 5 < args.intensity ){
          args.intensity = 3;
        }
      }
      catch{
        args.speed = 3;
        args.intensity = 3;
      }
      return animateSnow(args.speed, args.intensity, args.width, args.height, args.x, args.y)
    }
  }
  return self
}

const animateRain = (speed, intensity, width, height, x, y, color)=>{
  let position = 0;
  let rainEntities = '<div class="rain" '.concat(
    'style="left: ',x,'px; top: ',y,'px; width: ',width,'px; height: ',
    height,'px;">')
  while(position < 100 - (6-intensity)*2){
    //A random number which represents the amount of space between raindrops.
    //The intensity controls the width of the gap.
    const rainGap = Math.floor(Math.random()*(12 - intensity*2 - 1)) + 2 ;
    //delay to offset the raindrop from other raindrops
    const delay = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
    // Adds randomness to speed
    const speedDelay = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
    // Randomizes the rainstem's length
    const stemLength = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
    position += rainGap;
    rainEntities = rainEntities.concat(
      //raindrop properties
      //position from left
      '<div class="raindrop" style="left: ', position,'%;',
      '--rainColor:', color,';',
      //The ending position
      '--posEnd: ',height,'px;',
      //delay of the raindrop and duration of the raindrop (speed)
      'animation-delay: 0.', delay,'s;',
      'animation-duration: 0.', 8- speed, speedDelay, 's;">',
      //rainstem properties
      //length of the stem
      '<div class="rainstem" style="height:',stemLength,'%;',
      '--rainColor:', color,';',
      //delay of the stem and duration of the stem (speed)
      'animation-delay: 0.', delay,'s;',
      'animation-duration: 0.', 8- speed, speedDelay, 's;"></div>',
      //rainsplat properties
      '<div class="rainsplat" style="',
      '--rainColor:', color,';',
      //delay of the splat and duration of the splat (speed)
      'animation-delay:0.', delay,'s;',
      'animation-duration: 0.', 8- speed, speedDelay, 's;"></div>',
      //rainplop properties
      '<div class="rainplop" style="',
      '--rainColor:', color,';',
      //delay of the splat and duration of the splat (speed)
      'animation-delay: 0.', delay,'s;',
      'animation-duration: 0.', 8- speed, speedDelay, 's;"></div></div>',
    )
  }
  rainEntities = rainEntities.concat('</div>')
  return rainEntities;
}

const animateSnow = (speed, intensity, width, height, x, y)=>{
  let position = 0;
  let snowEntities = '<div class="snow" '.concat(
    'style="left: ',x,'px; top: ',y,'px; width: ',width,'px; height: ',
    height,'px;">')
  while(position < 95){
    //A random number which represents the amount of space between raindrops.
    //The intensity controls the width of the gap.
    const snowGap = Math.floor(Math.random()*(12 - intensity*2 - 1)) + 2 ;
    //delay to offset the raindrop from other raindrops
    const delay = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
    // Adds randomness to speed
    const speedDelay = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
    const snowType =  Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    position += snowGap;
    if(snowType === 1){
      snowEntities = snowEntities.concat(
        //raindrop properties
        //position from left
        '<div class="snowflake1" style="left: ', position,'%;',
        //positions for the animation
        '--posMid1: ',Math.floor(height/5),'px;',
        '--posMid2: ',Math.floor((height*2)/5),'px;',
        '--posMid3: ',Math.floor((height*3)/5),'px;',
        '--posMid4: ',Math.floor((height*4)/5),'px;',
        //The ending position
        '--posEnd: ',height,'px;',
        //delay of the snowflake and duration of the snowflake (speed)
        'animation-delay: 0.', delay,'s;',
        'animation-duration:', (0.3*(6-speed)+(.01*speedDelay)), 's;"></div>',
      )
    }
    if(snowType === 2){
      snowEntities = snowEntities.concat(
      //raindrop properties
      //position from left
      '<div class="snowflake2" style="left: ', position,'%;',
      //positions for the animation
      '--posMid1: ',Math.floor(height/5),'px;',
      '--posMid2: ',Math.floor((height*2)/5),'px;',
      '--posMid3: ',Math.floor((height*3)/5),'px;',
      '--posMid4: ',Math.floor((height*4)/5),'px;',
      '--posEnd: ',height,'px;',
      //delay of the snowflake and duration of the snowflake (speed)
      'animation-delay: 0.', delay,'s;',
      'animation-duration:', (0.3*(6-speed)+(.01*speedDelay)), 's;"></div>',
    )
    }
  }
  snowEntities = snowEntities.concat('</div>')
  return snowEntities;
}

const animateClear = (time) => {
  let backgroundElement = '<div class="clear"><div class="clearBackground">'
  const colors= ["#000000","#000066","#000099","#0099ff","#ccccff","#ffcc99","#ffff99","#ff9900","#ffcc99","#00ccff","#87ceeb"]
  for(let i=0;i<=11;i++){
    backgroundElement = backgroundElement.concat('<div class="clearSubBackground',i,'"></div>')
  }
  backgroundElement = backgroundElement.concat('</div></div>')
  return backgroundElement;
}

const animateCloud = (greyness, density, speed, width, height, x, y) => {
  let position = 0;
  const colors= ["#ffffff","#cccccc","#a6a6a6","#808080","#595959"]
  let cloudEntities = '<div class="cloud" '.concat(
    'style="left: ',x,'px; top: ',y,'px; width: ',width,'px; height: ',
    height,'px; ','--cloudColor:', colors[greyness-1],';','">')
  while(position < 100 - (10-density)*2){
    //A random number which represents the amount of space between raindrops.
    //The density controls the width of the gap.
    const cloudGap = Math.floor(Math.random()*(12 - density*2 - 1)) + 2 ;
    // Adds randomness to speed
    const speedDelay = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
    // Randomizes the cloudSize length
    const cloudSize = Math.floor(Math.random() * (4)) + 1;
    position += cloudGap;
    cloudEntities = cloudEntities.concat(
      //cloud properties
      //position from top
      '<div class="cloudSize',cloudSize,'" style="top: ', position,'%;',
      'animation-duration: ', 20 - ((5-speed)*2+(5-cloudSize)),'.',speedDelay,'s;"></div>',
    )
  }
  cloudEntities = cloudEntities.concat('</div>')
  return cloudEntities;
}

const animateLightning = (intensity, width, height, x, y)=>{
  let position = 0;
  let lightningEntities = '<div class="lightning" '.concat(
    'style="left: ',x,'px; top: ',y,'px; width: ',width,'px; height: ',
    height,'px;">')
  while(position < 95 - (10-intensity)*2){
    //A random number which represents the amount of space between raindrops.
    //The intensity controls the width of the gap.
    const lightningGap = Math.floor(Math.random()*(12 - intensity*2 - 1)) + 2 ;
    //delay to offset the raindrop from other raindrops
    const delay = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const delayMili = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
    const segments = Math.floor(Math.random() * (5 - 1 + 1)) + 3;
    position += lightningGap;
    lightningEntities = lightningEntities.concat(
      //raindrop properties
      //position from left
      '<div class="lightningBolt" style="left: ', position,'%;',
      //The ending position
      '--posEnd: ',height,'px;',
      //delay of the raindrop and duration of the raindrop (speed)
      'animation-delay:', delay,'.',delayMili,'s;">',
    )
    for(let segNum = 0; segNum < segments; segNum++){
      if(segNum%2 === 0){
        lightningEntities = lightningEntities.concat(
          '<svg height="',Math.floor((1/segments)*height),'px" width="',50,'px">',
          '<line class="lightningSegment" x1="',100,'%"','y1="',100,'%"',
          '"x2="',0,'%"','y2="',0,'%"/></svg>')
      }
      else{
        lightningEntities = lightningEntities.concat(
          '<svg height="',Math.floor((1/segments)*height),'px" width="',50,'px">',
          '<line class="lightningSegment" x1="',100,'%"','y1="',0,'%"',
          '"x2="',0,'%"','y2="',100,'%"/></svg>')
      }
    }
    lightningEntities = lightningEntities.concat('</div>')
  }
  lightningEntities = lightningEntities.concat('</div>')
  return lightningEntities;
}
