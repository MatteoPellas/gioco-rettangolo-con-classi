export default class MyGameArea {
    constructor(){
        this.canvas = document.getElementById("gameArea");
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 20);
    }

    drawrectangle(n){
        this.context.fillstyle = n.color;
        this.context.fillRect(
            n.x,
            n.y,
            n.width,
            n.height,
        )
    }
}