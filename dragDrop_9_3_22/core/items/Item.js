/*
* Abstract Class Item.
*
* @Class Item
*/
export default class Item {
    canvas = null;
    x = null;
    y = null;
    width = null;
    height = null;

    constructor(canvas, x, y, width, height) {
        if (this.constructor == Item)
            throw new Error("Abstract classes can't be instantiated.");
        
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    render() {}
}