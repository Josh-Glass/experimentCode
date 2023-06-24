import Item from "./Item.js";

/*
* Abstract Class DraggableItem.
*
* @class DraggableItem
* @extends { Item }
*/
export default class DraggableItem extends Item {
    offsetX = 0;
    offsetY = 0;
    mouseX = null;
    mouseY = null;
    selected = false;
    
    // Allow containers to take responsibility for handling mousedown events,
    // e.g., Renderer may need to determine which items it owns are to be dragged.
    responsibleForMouseDown = true;

    constructor(canvas, x, y, width, height) {
        super(canvas, x, y, width, height);
        if (this.constructor == DraggableItem)
            throw new Error("Abstract classes can't be instantiated.");
        
        this.canvas.addEventListener('mousedown', (event) => {
            if (this.responsibleForMouseDown) {
                this.handleMouseDown(event);
            }
        });

        this.canvas.addEventListener('mouseup', (event) => {
            this.handleMouseUp(event);
        });

        this.canvas.addEventListener('mousemove', (event) => {
            this.handleMouseMove(event);
        });

        // Event listeners for mobile
        this.canvas.addEventListener('touchstart', (event) => {
            this.handleMouseDown(event.touches[0]);
        });

        this.canvas.addEventListener('touchend', (event) => {
            this.handleMouseUp(event.touches[0]);
        });

        this.canvas.addEventListener('touchmove', (event) => {
            this.handleMouseMove(event.touches[0]);
        });
    }

    handleMouseDown(event) {
        // Get current mouse position
        this.mouseX = parseInt(event.clientX);
        this.mouseY = parseInt(event.clientY);

        // Do we need to do anything? Yes, iff mouse down inside the DraggableItem
        const handleEvent = (this.mouseX >= this.x && this.mouseX <= (this.x+this.width))
            && (this.mouseY >= this.y && this.mouseY <= (this.y+this.height));
        
        if (handleEvent) {
                this.selected = true;
                this.offsetX = this.mouseX-this.x;
                this.offsetY = this.mouseY-this.y;
            }
        
        // Report whether or not we took action on this event
        return handleEvent;
    }

    handleMouseUp(event) {
        this.selected = false;
    }

    handleMouseMove(event) {
        // Get current mouse position
        this.mouseX = parseInt(event.clientX);
        this.mouseY = parseInt(event.clientY);

        if (this.selected) {
            this.x = this.mouseX-this.offsetX;
            this.y = this.mouseY-this.offsetY;
    
            this.render();
        }
    }

    render() {}
}
