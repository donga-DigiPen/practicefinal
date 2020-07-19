// Final Projcet Prototype
// Dong-A Choi
// 10 years later at DigiPen
// cs099
// Spring 2020

class Lose{
  constructor(){
    this.credit = new Button(width/2, height * 4/5 + 50,"Main Menu")
  }
  
  update(){
    if(this.credit.DidClickButton()) {
      CurrentScene = MAINMENU
      keySelect.play()
    }
  }
  
  draw(){
    RoomName("Lose", width/2,0)
    this.credit.DrawButton()
  }
}