// Final Projcet Prototype
// Dong-A Choi
// 10 years later at DigiPen 
// cs099
// Spring 2020

const HUNGRY = 0
const CHICKEN = 1
const TISSUE = 2
const CHICKEN2 = 3
const CHICKEN3 = 4

let time4 = 0
let time4Elapsed = 0
let food = HUNGRY

class Cam4 {
  constructor() {
    this.yesButton = new Button(width * 1 / 5, height * 4 / 5, "Yes")
    this.noButton = new Button(width * 4 / 5, height * 4 / 5, "No")
  }

  update() {
    if (time4Elapsed > 20) {
      food = CHICKEN
      if (this.yesButton.DidClickButton()) {
        food = TISSUE
        nice.play()
        time4Elapsed = 0
      } else if (this.noButton.DidClickButton()) {
        monster4Scream.play()
        CurrentScene = LOSE4SCENE
      }
    }
    if (time4Elapsed > 35) {
      food = CHICKEN2
      if (this.yesButton.DidClickButton()) {
        food = TISSUE
        nice.play()
        time4Elapsed = 0
      } else if (this.noButton.DidClickButton()) {
        monster4Scream.play()
        CurrentScene = LOSE4SCENE
      }
    }
    if (time4Elapsed > 45) {
      food = CHICKEN3
      if (this.yesButton.DidClickButton()) {
        food = TISSUE
        nice.play()
        time4Elapsed = 0
      } else if (this.noButton.DidClickButton()) {
        monster4Scream.play()
        CurrentScene = LOSE4SCENE
      }
    }
    if(time4Elapsed > 50) {
      monster4Scream.play()
      CurrentScene = LOSE4SCENE
    }

    if (food == TISSUE) {
      if (this.yesButton.DidClickButton()) {
        monster4Scream.play()
        CurrentScene = LOSE4SCENE
      } else if (this.noButton.DidClickButton()) {
        food = HUNGRY
        nice.play()
        time4Elapsed = 0
      } else if (time4Elapsed>19) {
        monster4Scream.play()
        CurrentScene = LOSE4SCENE
      }
    }
    
  }

  draw() {
    RoomName('ROOM4', width / 2, 0)
    this.yesButton.DrawButton()
    this.noButton.DrawButton()

    switch (food) {
      case HUNGRY:
        text('hungry', width / 2, height * 3 / 4)
        break
      case CHICKEN:
        text('chicken', width / 2, height / 2 + 100)
        break
      case TISSUE:
        text('tissue', width / 2, height / 2 + 80)
        break
      case CHICKEN2:
        text('chicken * 2', width / 2, height / 2 + 60)
        break
      case CHICKEN3:
        push()
        stroke('red')
        textAlign(CENTER)
        text('chicken * 3!!!!!!!!!!!!!!!!!!', width / 2, height / 2 + 40)
        pop()
        break
    }
        push()
        frameRate(45)
        imageMode(CENTER)
        image(animation[frameCount % animation.length],width/2,height/2-50,200,200)
        pop()
  }


}