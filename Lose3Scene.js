// Final Projcet
// Dong-A Choi
// 10 years later at DigiPen
// cs099
// Spring 2020

class Lose3Scene{
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
    background(monster32)
    RoomName("Lose", width/2,0)
    this.lose1.DrawButton()
  }
}