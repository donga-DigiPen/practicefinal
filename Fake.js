// Final Projcet
// Dong-A Choi
// 10 years later at DigiPen
// cs099
// Spring 2020

class Fake {
  constructor() {
    this.nextScene2 = null
  }

  update() {
    this.nextScene2 = next()
  }

  draw() {
    text('Warning!', width / 2, height / 2)
  }
}

function next() {
  allTimeElapsed += (millis() - allTime) / 1000
  allTime = millis()
  if (allTimeElapsed > 0.01) {
    CurrentScene = WARNING
    allTimeElapsed = 0
  }
}