import MyGameArea from "./Mygamearea.js";
import Rectangle from "./Rectangle.js";

function startGame() {
    r = new Rectangle(40,50,30,30,"red")
    myGameArea=new MyGameArea()
}

var r;
var myGameArea

function updateGameArea() {
  myGameArea.draw(redSquare);
}