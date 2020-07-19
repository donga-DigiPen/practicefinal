// Final Projcet Prototype
// Dong-A Choi
// 10 years later at DigiPen
// cs099
// Spring 2020

class MainMenu{
  constructor(){
    this.play = new Button(width/2, height * 3/7+50, "Play")
    this.howtoplay = new Button(width/2, height * 4/7+50, "How To Play")
    this.credit = new Button(width/2, height * 5/7+50, "Credit")
  }
  
  update(){
    background(halloween)
    if(this.play.DidClickButton()){
      CurrentScene = FAKE
      keySelect.play()
    } else if(this.howtoplay.DidClickButton()) {
      CurrentScene = HOWTOPLAY
      keySelect.play()
    } else if(this.credit.DidClickButton()) {
      CurrentScene = CREDIT
      keySelect.play()
    }
  }
  
  draw(){
    RoomName("Main Menu",width/2,0)
    this.play.DrawButton()
    this.howtoplay.DrawButton()
    this.credit.DrawButton()
  }
}