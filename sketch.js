/*
Final Projcet
Dong-A Choi
10 years later at DigiPen
cs099
Spring 2020
*/

let CurrentScene = MAINMENU
let OfficeRoom
let Room1
let Room2
let Room3
let Room4
let Room5
let Room6
let Room7
let Room8
let MainMenuScene
let HowToPlayScene
let CreditScene
let WinScene
let LoseScene
let warningScene
let FakeScene
let lose1Scene
let lose2Scene
let lose3Scene
let lose4Scene
let lose5Scene
let lose6Scene
let lose8Scene

let ringAroundTheRosie
let getCoin
let keySelect
let knock
let doorOpen
let doorClose
let wearMask
let winSound
let turnAudio
let nice
let redScreen
let breath
let backgroundMusic
let monster1Scream
let monster2Scream
let monster3Scream
let momster4Scream
let monster5Scream
let monster6Scream
let monster8Scream
let coinLoop

let monster10
let monster11
let monster12
let monster13
let monster21
let monster22
let monster23
let monster31
let monster32
let monster33
let monster8
let monster4
let halloween
let backgroundImage
let spritesheet
let spritedata
let animation = []
let keyImage

let trauma = 0
const maxAngle = 3.14 / 8;
const maxOffset = 50;

function preload() {
  ringAroundTheRosie = createAudio("sound/ringAroundTheRosie.mp3")
  getCoin = createAudio("sound/coin.wav")
  keySelect = createAudio("sound/keyselect.wav")
  knock = createAudio("sound/knock.wav")
  doorOpen = createAudio("sound/dooropen.flac")
  doorClose = createAudio("sound/doorclose.flac")
  wearMask = createAudio("sound/wearmask.wav")
  winSound = createAudio("sound/winsound.wav")
  turnAudio = createAudio("sound/turnaudio.flac")
  nice = createAudio("sound/nice.wav")
  redScreen = createAudio("sound/redscreen.wav")
  breath = createAudio("sound/breath.wav")
  backgroundMusic = createAudio("sound/backgroundMusic1.mp3")
  monster1Scream = createAudio("sound/monster1Scream.wav")
  monster2Scream = createAudio("sound/monster2Scream.mp3")
  monster3Scream = createAudio("sound/monster3Scream.wav")
  monster4Scream = createAudio("sound/monster4Scream.wav")
  monster6Scream = createAudio("sound/ghost.wav")
  monster8Scream = createAudio("sound/monster8Scream.mp3")
  coinLoop = createAudio("sound/coinLoop.mp3")
  
  monster10 = loadImage("imagefile/monster10.png")
  monster11 = loadImage("imagefile/monster11.png")
  monster12 = loadImage("imagefile/monster12.png")
  monster13 = loadImage("imagefile/monster13.png")
  monster21 = loadImage("imagefile/monster21.png")
  monster22 = loadImage("imagefile/monster22.png")
  monster23 = loadImage("imagefile/monster23.png")
  monster31 = loadImage("imagefile/monster31.png")
  monster32 = loadImage("imagefile/monster32.png")
  monster33 = loadImage("imagefile/monster33.png")
  monster8 = loadImage("imagefile/monster8.png")
  monster4 = loadImage("imagefile/monster4.jpg")
  halloween = loadImage("imagefile/halloween.jpg")
  backgroundImage = loadImage("imagefile/background.png")
  spritedata = loadJSON("imagefile/pig.json")
  spritesheet = loadImage("imagefile/pig.png")
  keyImage = loadImage("imagefile/keyboard.png")
}

function setup() {
  createCanvas(800, 800);
  time1 = millis()
  time2 = millis()
  time3 = millis()
  time4 = millis()
  time5 = millis()
  time6 = millis()
  time7 = millis()
  time8 = millis()
  doorTime = millis()
  allTime = millis()
  OfficeRoom = new Office()
  Room1 = new Cam1()
  Room2 = new Cam2()
  Room3 = new Cam3()
  Room4 = new Cam4()
  Room5 = new Cam5()
  Room6 = new Cam6()
  Room7 = new Cam7()
  Room8 = new Cam8()
  MainMenuScene = new MainMenu()
  HowToPlayScene = new HowToPlay()
  CreditScene = new Credit()
  WinScene = new Win()
  LoseScene = new Lose()
  WarningScene = new Warning()
  FakeScene = new Fake()
  lose1Scene = new Lose1Scene()
  lose2Scene = new Lose2Scene()
  lose3Scene = new Lose3Scene()
  lose4Scene = new Lose4Scene()
  lose5Scene = new Lose5Scene()
  lose6Scene = new Lose6Scene()
  lose8Scene = new Lose8Scene()
  
  let frames = spritedata.frames
  for(let i = 0; i < frames.length; i++) {
    let fra = frames[i].frame
    let img = spritesheet.get(fra.x, fra.y, fra.w, fra.h)
    animation.push(img)
  }
}

function draw() {
  background('black');
  backgroundMusic.play()
  if(CurrentScene == LOSE || CurrentScene == WIN || CurrentScene == LOSE1SCENE || CurrentScene == LOSE2SCENE || CurrentScene == LOSE3SCENE || CurrentScene == LOSE4SCENE || CurrentScene == LOSE5SCENE || CurrentScene == LOSE6SCENE || CurrentScene == LOSE8SCENE) {
    backgroundMusic.pause()
  }
  
  if (!(CurrentScene == MAINMENU || CurrentScene == HOWTOPLAY || CurrentScene == CREDIT || CurrentScene == WARNING || CurrentScene == FAKE || CurrentScene == LOSE || CurrentScene == WIN || CurrentScene == LOSE1SCENE || CurrentScene == LOSE2SCENE || CurrentScene == LOSE3SCENE || CurrentScene == LOSE4SCENE || CurrentScene == LOSE5SCENE || CurrentScene == LOSE6SCENE || CurrentScene == LOSE8SCENE)) {
   interact1()
   interact2()
   interact3()
   interact4()
   interact5()
   interact6()
   interact7()
   interact8()
  }

  if (CurrentScene !== CAM8) {
    ringAroundTheRosie.pause()
  }

  if (CurrentScene == OFFICE && monster1Locate == Attack) {
    image(monster13,40, height / 6, 200,200)
  }
  if (CurrentScene == OFFICE && monster3Locate == Attack) {   
    image(monster32,560, height / 6 + 30, 200,200)
  }

  function interact1() {
    time1Elapsed += (millis() - time1) / 1000
    print('1' + ' ' + round(time1Elapsed))
    if (monster1Locate == Safe && time1Elapsed > 2) {
      monster1Locate = Caution
      time1Elapsed = 0
    }
    if (monster1Locate == Caution && time1Elapsed > 7) {
      monster1Locate = Danger
      time1Elapsed = 0
    }
    if (monster1Locate == Danger && time1Elapsed > 3) {
      monster1Locate = Attack
      time1Elapsed = 0
    }
    if (monster1Locate == Attack && time1Elapsed > 4 && OfficeRoom.maskbutton.GooglyEyesMask()) {
      monster1Locate = Safe
      time1Elapsed = 0
    }
    if (monster1Locate == Attack && time1Elapsed > 4 && !OfficeRoom.maskbutton.GooglyEyesMask()) {
      monster1Scream.play()
      CurrentScene = LOSE1SCENE
      time1Elapsed = 0
    }
    time1 = millis()
  }

  function interact2() {
    time2Ellapsed += (millis() - time2) / 1000
    print(round(time2Ellapsed))
    doorTimeElapsed += (millis() - doorTime) / 1000
    print('door' + ' ' + round(doorTimeElapsed))
    if (door == Close && doorTimeElapsed > 5) {
      door = Open
      doorOpen.play()
      doorTimeElapsed = 0
    }
    if (doorTimeElapsed > 5) {
      doorTimeElapsed = 0
    }

    if (monster2Locate == Safe && time2Ellapsed > 15) {
      monster2Locate = Caution
      time2Ellapsed = 0
    }
    if (monster2Locate == Caution && time2Ellapsed > 3) {
      monster2Locate = Danger
      time2Ellapsed = 0
    }
    if (monster2Locate == Danger && time2Ellapsed <= 7 && door == Close) {
      monster2Locate = Safe
      knock.play()
      time2Ellapsed = 0
    } else if (monster2Locate == Danger && time2Ellapsed > 7 && door == Open) {
      monster2Scream.play()
      CurrentScene = LOSE2SCENE
    }
    time2 = millis()
    doorTime = millis()
  }

  function interact3() {
    time3Elapsed += (millis() - time3) / 1000
    print('monster3' + ' ' + round(time3Elapsed))
    if (monster3Locate == Safe && time3Elapsed > 3) {
      monster3Locate = Caution
      time3Elapsed = 0
    }
    if (monster3Locate == Caution && time3Elapsed > 24) {
      monster3Locate = Danger
      time3Elapsed = 0
    }
    if (monster3Locate == Danger && time3Elapsed > 8) {
      monster3Locate = Attack
      time3Elapsed = 0
    }
    if (monster3Locate == Attack && time3Elapsed > 3 && OfficeRoom.maskbutton.GooglyEyesMask()) {
      monster3Locate = Safe
      time3Elapsed = 0
    }
    if (monster3Locate == Attack && time3Elapsed > 3 && !OfficeRoom.maskbutton.GooglyEyesMask()) {
      monster6Scream.play()
      CurrentScene = LOSE3SCENE
      time3Elapsed = 0
    }
    time3 = millis()
  }

  function interact4() {
    time4Elapsed += (millis() - time4) / 1000
    print('monster4' + ' ' + round(time4Elapsed))
    time4 = millis()
  }

  function interact5() {
    time5Elapsed += (millis() - time5) / 1000
    time5 = millis()
    if (time5Elapsed > 10) {
      coinLocate = 1
    }
    if (time5Elapsed > 25) {
      coinLocate = 2
    }
    if (time5Elapsed > 30) {
      coinLocate = 3
    }
    if (time5Elapsed > 45) {
      CurrentScene = LOSE5SCENE
      coinLoop.play()
    }
  }

  function interact6() {
    trauma = constrain(trauma, 0, 1)
    let shake = trauma * trauma
    let offsetX = maxOffset * shake * random(0, 0.5)
    let offsetY = maxOffset * shake * random(0, 0.5)
    let angle = maxAngle * shake * random(0, 0.5)
    translate(offsetX, offsetY)
    rotate(angle)

    time6Elapsed += (millis() - time6) / 1000
    print('monster6' + ' ' + round(time6Elapsed))
    if (time6Elapsed > 30) {
      trauma += 0.01
      if (CurrentScene == CAM6) {
        trauma = 0
        time6Elapsed = 0
      } else if (time6Elapsed > 38) {
        monster3Scream.play()
        CurrentScene = LOSE6SCENE
      }
    }
    if (CurrentScene == LOSE6SCENE) {
      trauma = 0
    }
    time6 = millis()
  }

  function interact7() {
    time7Elapsed += (millis() - time7) / 1000
    time7 = millis()
    print('time7' + ' ' + round(time7Elapsed))
    if(time7Elapsed < 20 && CurrentScene == CAM7) {
      time7Elapsed = 0
    }
    if(time7Elapsed > 60) {
      background('red')
      redScreen.play()
      if(time7Elapsed > 70) {
        background('white')
      }
      if(time7Elapsed > 80) {
        background('yellow')
      }
      if(time7Elapsed > 90) {
        background('black')
      }
      if(time7Elapsed > 100) {
        time7Elapsed = 0
        redScreen.pause()
      }
    }
  }

  function interact8() {
    time8Elapsed += (millis() - time8) / 1000
    time8 = millis()
    print('time8' + ' ' + round(time8Elapsed))
    if (time8Elapsed > 18) {
      monster8Scream.play()
      CurrentScene = LOSE8SCENE
    }
  }

  switch (CurrentScene) {
    case OFFICE:
      OfficeRoom.update();
      OfficeRoom.draw();
      break
    case CAM1:
      Room1.update();
      Room1.draw();
      break
    case CAM2:
      Room2.update();
      Room2.draw();
      break
    case CAM3:
      Room3.update();
      Room3.draw();
      break
    case CAM4:
      Room4.update();
      Room4.draw();
      break
    case CAM5:
      Room5.update();
      Room5.draw();
      break
    case CAM6:
      Room6.update();
      Room6.draw();
      break
    case CAM7:
      Room7.update();
      Room7.draw();
      break
    case CAM8:
      Room8.update();
      Room8.draw();
      break
    case MAINMENU:
      MainMenuScene.update()
      MainMenuScene.draw();
      break
    case HOWTOPLAY:
      HowToPlayScene.update()
      HowToPlayScene.draw();
      break
    case CREDIT:
      CreditScene.update()
      CreditScene.draw();
      break
    case WIN:
      WinScene.update()
      WinScene.draw()
      break
    case LOSE:
      LoseScene.update()
      LoseScene.draw()
      break
    case WARNING:
      WarningScene.update()
      WarningScene.draw()
      break
    case FAKE:
      FakeScene.update()
      FakeScene.draw()
      break
      case LOSE1SCENE:
      lose1Scene.update()
      lose1Scene.draw()
      break
      case LOSE2SCENE:
      lose2Scene.update()
      lose2Scene.draw()
      break
      case LOSE3SCENE:
      lose3Scene.update()
      lose3Scene.draw()
      break
      case LOSE4SCENE:
      lose4Scene.update()
      lose4Scene.draw()
      break
      case LOSE5SCENE:
      lose5Scene.update()
      lose5Scene.draw()
      break
      case LOSE6SCENE:
      lose6Scene.update()
      lose6Scene.draw()
      break
      case LOSE8SCENE:
      lose8Scene.update()
      lose8Scene.draw()
      break
  }
}

function keyPressed() {
  if (keyCode == 96 || keyCode == 48) {
    CurrentScene = OFFICE
  } else if (keyCode == 97 || keyCode == 49) {
    CurrentScene = CAM1
  } else if (keyCode == 98 || keyCode == 50) {
    CurrentScene = CAM2
  } else if (keyCode == 99 || keyCode == 51) {
    CurrentScene = CAM3
  } else if (keyCode == 100 || keyCode == 52) {
    CurrentScene = CAM4
  } else if (keyCode == 101 || keyCode == 53) {
    CurrentScene = CAM5
  } else if (keyCode == 102 || keyCode == 54) {
    CurrentScene = CAM6
  } else if (keyCode == 103 || keyCode == 55) {
    CurrentScene = CAM7
  } else if (keyCode == 104 || keyCode == 56) {
    CurrentScene = CAM8
  }
}

function RoomName(name, Width, Height) {
  stroke('white')
  textAlign(CENTER)
  textSize(15)
  text(name, Width, Height + 50)
}