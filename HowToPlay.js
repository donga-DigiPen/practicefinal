// Final Projcet 
// Dong-A Choi
// 10 years later at DigiPen
// cs099
// Spring 2020

class HowToPlay{
  constructor(){
    this.backtomainmenu = new Button(width/2, height * 4/5+50, "Main Menu")
  }
  
  update(){
    if(this.backtomainmenu.DidClickButton()) {
      CurrentScene = MAINMENU
      keySelect.play()
    }
  }
  
  draw(){
    RoomName("How To Play",width/2,0)
    this.backtomainmenu.DrawButton()
    push()
    imageMode(CENTER)
    stroke('red')
    text('Press the key to move another room',150,120)
    image(keyImage,width/2,200,200,200)
    textAlign(LEFT)
    text('CAM1 : You have to wear a mask',5,420)
    text('CAM2 : You have to close the door',5,450)
    text('CAM3 : You have to wear a mask',5,480)
    text('CAM4 : You have to feed the monster.. his favorite food is Chicken.. Not tissue.  hahahahahahahahahahahahaha',5,510)
    text("CAM5 : coin's are randomly move in this camera, you press the button when ONLY 3coin's are randomly move",5,540)
    text('CAM6 : When the camera is shaking, you have to see this camera at least 1 second',5,570)
    text('CAM7 : ???????',5,600)
    text('CAM8 : When the song stops, you have to click the monitor on this cam',5,630)
    pop()
  }
}