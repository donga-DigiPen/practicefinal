// Final Projcet Prototype
// Dong-A Choi
// 10 years later at DigiPen Prototype
// cs099
// Spring 2020

class Lose1Scene{
  constructor(){
    this.lose1 = new Button(width/2, height * 4/5 + 50,"Main Menu")
  }
  
  update(){
    if(this.lose1.DidClickButton()) {
      CurrentScene = MAINMENU
      keySelect.play()
    }
  }
  
  draw(){
    background(monster13)
    RoomName("Lose", width/2,0)
    this.lose1.DrawButton()
  }
}