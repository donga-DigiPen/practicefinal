// Final Projcet Prototype
// Dong-A Choi
// 10 years later at DigiPen Prototype
// cs099
// Spring 2020

let monster2Locate = Safe
let door = Open
let x =0
let y =0 
let time2 = 0
let time2Ellapsed = 0
let doorTime
let doorTimeElapsed = 0

class Cam2{
  constructor(){
    this.doorinteract = new Button(width/2,height-20,"close the door")
  }
  
  update(){
    if(this.doorinteract.DidClickButton()){
      door = Close
      doorClose.play()
    }
  }
  
  draw(){
   RoomName("ROOM2", width/2,0)
   this.doorinteract.DrawButton()
    
   switch(door) {
      case Open :
      text('open',20,height/2)
      break
      case Close :
      text('close',20,height/2)
      break
  }
  
  switch(monster2Locate) {
      case Safe :
      background(monster21)
      break
      case Caution :
      background(monster22)
      break
      case Danger :
      background(monster23)
  }
  }    
}
  