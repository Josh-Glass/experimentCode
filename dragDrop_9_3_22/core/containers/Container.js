import Item from "../items/Item.js";

/*
* Abstract Class Container
*
* @class Conainter
* @extends { Item }
*/
export default class Container extends Item {
    validItems = [];
    activeItem = null;

    constructor(canvas, x, y, width, height, validItems) {
        super(canvas, x, y, width, height);
        //if (this.constructor == Container)
        //    throw new Error("Abstract classes can't instantiated.");

        this.validItems = validItems;
    }

    snapItemToContainer(item) {
        // Item is within container and not selected
        if ((item.x+this.width >= this.x && item.x-this.width <= this.x) &&
        (item.y+this.height >= this.y && item.y-this.height <= this.y)
        && item.selected == false) {
            item.x = this.x;
            item.y = this.y;
            this.activeItem = item;
            return true;
        }
    }

    render() {
        var ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "black";
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.stroke();

        // There is currently no item in the container
        if (this.activeItem == null)
            // check for valid items
            this.validItems.forEach((item) => {
                this.snapItemToContainer(item);
            });

        // If active item is selected release it from
        // the container
        else if (this.activeItem.selected)
            this.activeItem = null;
    }
}