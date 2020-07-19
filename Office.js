// Final Projcet
// Dong-A Choi
// 10 years later at DigiPen
// cs099
// Spring 2020

let allTime = 0
let allTimeElapsed = 0

class Office{
  constructor(){
    this.displaytime = null
    this.displayclock = null
    this.maskbutton = new Button(width/2, height * 4/5, "Googly Eyes")
  }
  
  update(){
    background(backgroundImage)
    this.displaytime = text(round(allTimeElapsed),750,60)
    this.displayclock = displayTime()
    if(this.maskbutton.GooglyEyesMask()) {
      mask()
      wearMask.play()
      breath.play()
    }
  }
  
  draw(){
    RoomName('OFFICE',width/2,0)
    this.maskbutton.DrawButton()
    
  }
}

function displayTime() {
  allTimeElapsed += (millis() - allTime) / 1000
  print('all' + ' ' + round(allTimeElapsed))
  allTime = millis()
  if(round(allTimeElapsed) >= 0 && round(allTimeElapsed)<60) {
    text("12 A.M.",750,30)
  }
  else if(round(allTimeElapsed) >= 60 && round(allTimeElapsed)<120) {
    text("1 A.M.",750,30)
  }
  else if(round(allTimeElapsed) >= 120 && round(allTimeElapsed)<180) {
    text("2 A.M.",750,30)
  }
  else if(round(allTimeElapsed) >= 180 && round(allTimeElapsed)<240) {
    text("3 A.M.",750,30)
  }
  else if(round(allTimeElapsed) >= 240 && round(allTimeElapsed)<300) {
    text("4 A.M.",750,30)
  }
  else if(round(allTimeElapsed) >= 300 && round(allTimeElapsed)<=360) {
    text("5 A.M.",750,30)
  }
  else if(round(allTimeElapsed) > 360) {
    text("6 A.M.",750,30)
    CurrentScene = WIN
  }
}

function mask() {
  push()
  fill('white')
  circle(width/2-50,height/2,50)
  circle(width/2 + 50, height/2,50)
  pop()
  push()
  fill('black')
  circle(width/2-50,height/2-20,20)
  circle(width/2+50, height/2-20,20)
  pop()
}