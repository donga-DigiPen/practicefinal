/*
Final Projcet Prototype
Dong-A Choi
10 years later at DigiPen
cs099
Spring 2020
*/

class Button {
  constructor(center_x, center_y, word) {
    this.left = center_x - 100
    this.top = center_y - 17.5
    this.width = 200
    this.height = 35
    this.label = word
    this.mouseIsOver = false
    this.mouseWasPressed = false
  }
  
  DidClickButton() {
    const left = this.left
    const top = this.top
    const right = left + this.width
    const bottom = top + this.height
    const within_x = mouseX > left && mouseX < right
    const within_y = mouseY > top && mouseY < bottom
    this.mouseIsOver = within_x && within_y
    const clicked_it = this.mouseIsOver && this.mouseWasPressed && !mouseIsPressed
    this.mouseWasPressed = mouseIsPressed
    return clicked_it
  }

  DrawButton() {
    push()
    stroke(159)
    fill(0)
    if(this.mouseIsOver) {
      if(mouseIsPressed) {
          fill(220)
      }
      else {
          fill(240)
      }
    }
    translate(this.left, this.top)
    rect(0, 0, this.width, this.height)
    textAlign(CENTER, CENTER)
    fill(0)
    stroke('red')
    text(this.label, this.width / 2, this.height / 2);
    pop();
  }
  
  GooglyEyesMask() {
    const left = this.left;
    const top = this.top;
    const right = left + this.width;
    const bottom = top + this.height;
    const within_x = mouseX > left && mouseX < right;
    const within_y = mouseY > top && mouseY < bottom;
    this.mouseIsOver = within_x && within_y;
    const hold = this.mouseIsOver && mouseIsPressed
    return hold;
  }
}