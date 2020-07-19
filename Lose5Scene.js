// Final Projcet Prototype
// Dong-A Choi
// 10 years later at DigiPen
// cs099
// Spring 2020

class Lose5Scene{
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
    push()
    fill('yellow')
    circle(random(0, width), random(0, height), 20)
    circle(random(0, width), random(0, height), 20)
    circle(random(0, width), random(0, height), 20)
    circle(random(0, width), random(0, height), 20)
    circle(random(0, width), random(0, height), 20)
    circle(random(0, width), random(0, height), 20)
    circle(random(0, width), random(0, height), 20)
    pop()
    RoomName("Lose", width/2,0)
    this.lose1.DrawButton()
  }
}