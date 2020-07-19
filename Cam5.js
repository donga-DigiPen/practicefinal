// Final Projcet Prototype
// Dong-A Choi
// 10 years later at DigiPen
// cs099
// Spring 2020

let time5 = 0
let time5Elapsed = 0
let coinLocate = 0

class Cam5 {
  constructor() {
    this.getCoin = new Button(width/2, height * 4/5, "Get Coin!")
  }

  update() {
    if((coinLocate ==0 || coinLocate ==1 || coinLocate == 2) && this.getCoin.DidClickButton()) {
      CurrentScene = LOSE5SCENE
      coinLoop.play()
    }
    if(coinLocate == 3 && this.getCoin.DidClickButton()) {
      coinLocate = 0
      time5Elapsed = 0
      getCoin.play()
    }
  }

  draw() {
    RoomName('ROOM5',width/2,0)
    this.getCoin.DrawButton()
    push()
    fill('yellow')
    switch (coinLocate) {
      case 0:
        break
      case 1:
        circle(random(0, width), random(0, height), 20)
        break;
      case 2:
        circle(random(0, width), random(0, height), 20)
        circle(random(0, width), random(0, height), 20)
        break;
      case 3:
        circle(random(0, width), random(0, height), 20)
        circle(random(0, width), random(0, height), 20)
        circle(random(0, width), random(0, height), 20)
        break;
    }
    pop()
    
  }
}