// Final Projcet Prototype
// Dong-A Choi
// 10 years later at DigiPen
// cs099
// Spring 2020

let time8 = 0
let time8Elapsed = 0

class Cam8{
  constructor(){
    this.sound = null
    this.interactSound = null
  }
  
  update(){
    this.sound = ringAroundTheRosie.loop()
    this.interactSound = sound8()
  }
  
  draw(){
    RoomName('ROOM8', width/2, 0)
  }
}

function sound8() {
  if(time8Elapsed > 12) {
    // text('pause',50,50)
    ringAroundTheRosie.pause()
  }
  if(mouseIsPressed) {
    ringAroundTheRosie.loop()
    turnAudio.play()
    time8Elapsed = 0
  }
}