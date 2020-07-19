// Final Projcet Prototype
// Dong-A Choi
// 10 years later at DigiPen
// cs099
// Spring 2020

let monster1Locate = Safe
let time1 = 0
let time1Elapsed = 0

class Cam1 {
  constructor() {

  }

  update() {

  }

  draw() {
    RoomName('ROOM1', width/2, 0)
    switch (monster1Locate) {
      case Safe:
        background(monster11)
        break
      case Caution:
        background(monster12)
        break
      case Danger:
        background(monster10)
        break
      case Attack:
        circle(width *2,0)
        break
    }

  }
}