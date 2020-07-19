// Final Projcet Prototype
// Dong-A Choi
// 10 years later at DigiPen Prototype
// cs099
// Spring 2020

let monster3Locate = Safe
let time3 = 0
let time3Elapsed = 0

class Cam3{
  constructor(){
    
  }
  
  update(){
    
  }
  
  draw(){
    RoomName('ROOM3', width/2, 0)
    switch(monster3Locate) {
      case Safe :
      background(monster31)
      break
      case Caution :
      background(monster33)
      break
      case Danger :
      background(monster32)
      break
      case Attack :
      circle(width*2,0)
      break
  }
  } 
}