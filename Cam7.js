// Final Projcet Prototype
// Dong-A Choi
// 10 years later at DigiPen
// cs099
// Spring 2020

let time7 = 0
let time7Elapsed = 0
let innerTime = 0
let innerTimeElapsed = 0
let textLocate = 0

class Cam7{
  constructor(){
    this.bg = null
  }
  
  update(){
    this.bg = background(0)
  }
  
  draw(){
    RoomName('ROOM7', width/2, 0)
    push()
    textAlign(CENTER)
    stroke('red')
    if(time7Elapsed > 10) {
      text('Why',30,30)
    }
    if(time7Elapsed > 20) {
      text('you',70,30)
    }
    if(time7Elapsed > 30) {
      text('do not',120,30)
    }
    if(time7Elapsed > 40) {
      text('care',170,30)
    }
    if(time7Elapsed > 50) {
      text('about',220,30)
    }
    if(time7Elapsed > 55) {
      text('me...?',270,30)
    }
    pop()
  } 
}