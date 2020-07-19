// Final Projcet Prototype
// Dong-A Choi
// 10 years later at DigiPen Prototype
// cs099
// Spring 2020

class Credit{
  constructor(){
    this.credit = new Button(width/2, height * 4/5 + 50,"Main Menu")
  }
  
  update(){
    if(this.credit.DidClickButton()) {
      CurrentScene = MAINMENU
      keySelect.play()
    }
  }
  
  draw(){
    RoomName("Credit", width/2,0)
    this.credit.DrawButton()
    push()
    textAlign(LEFT)
    text(" license\n horror sound(redScreen,breath), doorknock,dooropen,doorclose,wearmask,turnaudio,monster6Scream sound \n - OpenGameArt.org - https://opengameart.org/ all license is public domain \n coin,buttonclick sound - bfxr program \n monster4 image - draw by Se-hun Kim (I got a permission) \n winSound - from OpenGameArt.org - https://opengameart.org/art-search?keys=cheer - all licence is CC \n RingAroundTheRosie, Nice sound - freesound.org - all license is CC \n bgm from free Youtube license site - https://www.youtube.com/audiolibrary/music?nv=1 \n halloween image - pixabay - all license is public domain \n monster1,monster2,monster3 - draw by su-oh Choi (I got a permission) \n scream sound - freesound.org \n ", 5,200)
    pop()
    text('Made By Dong-A Choi',width/2,height* 3/4)
  }
}