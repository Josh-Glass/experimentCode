# JavaScript Library

Current Features:
- Draggable Items
- Items
    - Images
    - Rectangles
- Containers

TODO:
- Finish building containers
- Build separate event handler?
- Fix issue where items cannot be separated when overlapped completely

## Note: ES6 Module

This was written using [ES6 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) to try to organize the code into discrete objects following OOP principles. This will allow code to be modular which will result in code that is easier to maintain and expand. As a result of using ES6 modules, the JS code requires a webserver to avoid running into CORS errors due to JavaScript module security requirements.

ES6 Modules have a pretty high browser support (~ 95%), but it might be worth looking into creating a version without ES6 Modules for backwards compatibility.

## Items

Items refer to any object that is visually rendered onto the page. Almost everything will inherit from this. Draggable Items extend Items further to allow drag and drop functionality for both mouse and touch devices.

### Images (draggable)

Image items will render an image onto the page.

`var image = new Image(canvas, x, y, width, height, source);`

### Rectangles (draggable)

Rectangle items will render a dynamically created rectangle onto the page.

`var rectangle = new Rectangle(canvas, x, y, width, height, stroke, fill);`

## Containers

Containers are a special item type that can be supplied with 'validItems' that can be added to the container.

`var contianer = new Container(canvas, x, y, width, height, validItems)`