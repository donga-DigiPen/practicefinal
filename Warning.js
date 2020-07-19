// Final Projcet Prototype
// Dong-A Choi
// 10 years later at DigiPen
// cs099
// Spring 2020

class Warning {
  constructor() {
    this.nextScene = null
  }

  update() {
    this.nextScene = warningTime()
  }

  draw() {
    push()
    textAlign(CENTER)
    stroke('red')
    textSize(20)
    text("Warning!\n It's not appropriate for under 18", width / 2, height / 2)
    pop()
  }
}

function warningTime() {
  allTimeElapsed += (millis() - allTime) / 1000
  allTime = millis()
  print('warn' + ' ' + round(allTimeElapsed))
  if (allTimeElapsed > 2) {
    CurrentScene = OFFICE
    allTimeElapsed = 0
  }
  
  time1Elapsed += (millis() - time1) / 1000
  time1 = millis()
  if(time1Elapsed > 1.9) {
    time1Elapsed = 0
  }
  
  time2Ellapsed += (millis() - time2) / 1000
  time2 = millis()
  if(time2Ellapsed > 1.9) {
    time2Ellapsed = 0
  }
  
  time3Elapsed += (millis() - time3) / 1000
  time3 = millis()
  if(time3Elapsed > 1.9) {
    time3Elapsed = 0
  }
  
  time4Elapsed += (millis() - time4) / 1000
  time4 = millis()
  if(time4Elapsed > 1.9) {
    time4Elapsed = 0
  }
  
  time5Elapsed += (millis() - time5) / 1000
  time5 = millis()
  if(time5Elapsed > 1.9) {
    time5Elapsed = 0
  }
  
  time6Elapsed += (millis() - time6) / 1000
  time6 = millis()
  if(time6Elapsed > 1.9) {
    time6Elapsed = 0
  }
  time7Elapsed += (millis() - time7) / 1000
  time7 = millis()
  if(time7Elapsed > 1.9) {
    time7Elapsed = 0
  }
  
  time8Elapsed += (millis() - time8) / 1000
  time8 = millis()
  if(time8Elapsed > 1.9) {
    time8Elapsed = 0
  }

}