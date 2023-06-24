import Renderer from "./core/Renderer.js";
import Rectangle from "./core/items/Rectangle.js";
import Container from "./core/containers/Container.js";

// Build canvas


var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.append(canvas);




// Instantiate renderer
var renderer = new Renderer(canvas);



//make random number generator
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
//get screen dimensions
let w = window.innerWidth;
let h = window.innerHeight;
//make random numbers for coordinates
let s1x = getRndInteger(200, w-200);
let s1y = getRndInteger(300, h-300);

let s2x = getRndInteger(200, w-200);
let s2y = getRndInteger(300, h-300);

let s3x = getRndInteger(200, w-200);
let s3y = getRndInteger(300, h-300);

let s4x = getRndInteger(200, w-200);
let s4y = getRndInteger(300, h-300);

let s5x = getRndInteger(200, w-200);
let s5y = getRndInteger(300, h-300);

let s6x = getRndInteger(200, w-200);
let s6y = getRndInteger(300, h-300);

let s7x = getRndInteger(200, w-200);
let s7y = getRndInteger(300, h-300);

let s8x = getRndInteger(200, w-200);
let s8y = getRndInteger(300, h-300);




var s1 = new Rectangle(canvas, s1x, s1y, 70, 70, true, 'red');
var s2 = new Rectangle(canvas, s2x, s2y, 70, 70, true, 'red');
var s3 = new Rectangle(canvas, s3x, s3y, 70, 70, true, 'blue');
var s4 = new Rectangle(canvas, s4x, s4y, 70, 70, true, 'blue');
var s5 = new Rectangle(canvas, s5x, s5y, 70, 70, true, 'red');
var s6 = new Rectangle(canvas, s6x, s6y, 70, 70, true, 'red');
var s7 = new Rectangle(canvas, s7x, s7y, 70, 70, true, 'blue');
var s8 = new Rectangle(canvas, s8x, s8y, 70, 70, true, 'blue');

// Add items to renderer
renderer.addItem(s1);
renderer.addItem(s2);
renderer.addItem(s3);
renderer.addItem(s4);
renderer.addItem(s5);
renderer.addItem(s6);
renderer.addItem(s7);
renderer.addItem(s8);
// Add items to renderer
renderer.addItem(s1);
renderer.addItem(s2);
renderer.addItem(s3);
renderer.addItem(s4);
renderer.addItem(s5);
renderer.addItem(s6);
renderer.addItem(s7);
renderer.addItem(s8);




var validItems = [
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    s7,
    s8
];

// Add container items to renderer



renderer.addItem(new Container(canvas, 350, 600, 71, 71, validItems));
renderer.addItem(new Container(canvas, 450, 600, 71, 71, validItems));
renderer.addItem(new Container(canvas, 550, 600, 71, 71, validItems));
renderer.addItem(new Container(canvas, 650, 600, 71, 71, validItems));
renderer.addItem(new Container(canvas, 750, 600, 71, 71, validItems));
renderer.addItem(new Container(canvas, 850, 600, 71, 71, validItems));
renderer.addItem(new Container(canvas, 950, 600, 71, 71, validItems));
renderer.addItem(new Container(canvas, 1050, 600, 71, 71, validItems));