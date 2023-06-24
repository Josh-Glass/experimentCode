import DraggableItem from "./DraggableItem.js";

/*
* Class Rectangle.
*
* @class Rectangle
* @extends { DraggableItem }
*/
export default class Rectangle extends DraggableItem {
    stroke = 'black';
    fill = 'red';

    constructor(canvas, x, y, width, height, stroke, fill) {
        super(canvas, x, y, width, height);

        this.stroke = stroke;
        this.fill = fill;
    }

    render() {
        var ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = this.stroke;
        ctx.fillStyle = this.fill;
        ctx.rect(this.x,this.y,this.width,this.height);
        if (this.fill)
            ctx.fill();
        if (this.stroke)
            ctx.stroke();
    }
}