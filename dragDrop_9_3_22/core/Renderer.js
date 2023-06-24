import DraggableItem from "./items/DraggableItem.js";

/*
* Class Renderer.
*
* @class Renderer
*/
export default class Renderer {
    items = [];

    constructor(canvas) {
        
        /* 
        * Let the renderer control the passing of mousedown events to its draggable items
        *
        * The items of a renderer need to know about each other (e.g., they need
        * to know which item is "on top" to know which item should be dragged),
        * but the cleanest way to do this is to give responsibility to a parent.
        *
        * We'll loop through the items top-to-bottom and give them each a chance
        * to handle the mousedown event. If one of the items handles it, then
        * we stop giving others a chance.
        */
        addEventListener('mousedown', (event) => {
            
            // Loop through items in reverse-render-order. An item is "on top"
            // if it's rendered last.
            for (let index = this.items.length - 1; index >= 0; index--) {
                
                // Only take responsibility for draggable items
                if (!(this.items[index] instanceof DraggableItem)) continue;
                
                // Pass the event to the current item and have it report whether
                // the event was handled.
                const eventWasHandled = this.items[index].handleMouseDown(event)
                
                // If the event was handled, then we need to break out of this loop
                // (we don't want multiple items being dragged all at once!)
                // 
                // Additionally, dragging an item puts it "on top" of the others, so
                // we need to change up the order of this.items
                if (eventWasHandled) {
                    // Send the item that handled the event to the back of this.items
                    this.items.push(this.items.splice(index, 1)[0]);
                    // break out of the loop to stop passing this event around
                    break;
                }
                
            }
            
        });

        this.canvas = canvas;

        setInterval(()=>{this.#update()}, 16.67);
    }

    #update() {
        // If canvas is not set,
        // throw error
        if (!this.canvas)
            throw new Error("Canvas is not defined.");
        
        var ctx = this.canvas.getContext("2d");

        // Refresh canvas for new frame
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Render all items
        this.items.forEach((item) => {
            item.render();
        });
    }

    addItem(item) {
        this.items.push(item);
        
        // Take responsibility for dragging
        if (item instanceof DraggableItem) {
            item.responsibleForMouseDown = false;
        }
    }
}
