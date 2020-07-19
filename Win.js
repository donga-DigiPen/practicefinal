/*
Final Projcet Prototype
Dong-A Choi
10 years later at DigiPen
cs099
Spring 2020
*/

class Win{
  constructor(){
    this.gotocredit = new Button(width/2, height * 5/7+50, "Credit")
  }
  
  update(){
    if(this.gotocredit.DidClickButton()){
      CurrentScene = CREDIT
      keySelect.play()
    }
    winSound.play()
  }
  
  draw(){
    this.gotocredit.DrawButton()
    text('win',width/2,height/2)
  }
}