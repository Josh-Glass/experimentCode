var dragAndDrop = {


    start: function(params, next) {

        params['results'].push(['stim','x','y'])


        var space = oCanvas.create({
            canvas: dragAndDrop.initCanvas(),
            background: 'rgba(255,255,255,1)',
        })
        dragAndDrop.initListeners(space)
        

        cx = space.canvasElement.width / 2
        cy = space.canvasElement.height / 2



        //make random number generator
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
        //get screen dimensions
        let w = window.innerWidth;
        let h = window.innerHeight;
        //make random numbers for coordinates
        let s1x = getRndInteger(cx-200, cx +50);
        let s1y = getRndInteger(cy-50,cy-70);

        let s2x = getRndInteger(cx-200, cx +50);
        let s2y = getRndInteger(cy-50,cy-70);

        let s3x = getRndInteger(cx-200, cx +50);
        let s3y = getRndInteger(cy-50,cy-70);

        let s4x = getRndInteger(cx-200, cx +50);
        let s4y = getRndInteger(cy-50,cy-70);

        let s5x = getRndInteger(cx-200, cx +50);
        let s5y = getRndInteger(cy-50,cy-70);

        let s6x = getRndInteger(cx-200, cx +50);
        let s6y = getRndInteger(cy-50,cy-70);

        let s7x = getRndInteger(cx-200, cx +50);
        let s7y = getRndInteger(cy-50,cy-70);

        let s8x = getRndInteger(cx-200, cx +50);
        let s8y = getRndInteger(cy-50,cy-70);

        
        continue_box = sort.initContinueBox(space)



    //make instructions
    var text = space.display.text({
        x: cx,
        y: cy-325,
        align: 'center',
        origin: { x: "center", y: "top" },
        font: "bold 30px sans-serif",
        text: "These marbles are currently in random positions.\n Please arrange them along a line into an ordering of your choice. \n Press the finished button when you are done.",
        fill: "#0aa"
    });
    
    space.addChild(text);


     //make finished button
     finished = space.display.rectangle({
        x: cx,
        y: cy + 300,
        origin: { x: "center", y: "center" }, align: 'center',
        width: 160,
        height: 60,
        fill: "#079",
        stroke: "10px #079",
        join: "round",
    })
    finished.addChild(
        space.display.text({
            x: 0,
            y: 0,
            origin: { x: "center", y: "center" }, align: 'center',
            align: "center",
            font: "bold 25px sans-serif",
            text: "Finished",
            fill: "rgba(255,255,255,1)",
            zIndex: "front",
        })
    )
    space.addChild(finished)
        


    //container 1
    var container1 = space.display.rectangle({
        x: cx-600,
        y: cy+100,
       // origin: { x: "center", y: "center" }, align: 'center',
        width: 100,
        height: 100,
        fill: "white",
        stroke: "2px black",
        
    })

    space.addChild(container1);

    //container 2
    var container2 = space.display.rectangle({
        x: cx - 450,
        y: cy + 100,
       // origin: { x: "center", y: "center" }, align: 'center',
        width: 100,
        height: 100,
        fill: "white",
        stroke: "2px black",
        
    })

    space.addChild(container2);

    //container 3
    var container3 = space.display.rectangle({
        x: cx - 300,
        y: cy + 100,
       // origin: { x: "center", y: "center" }, align: 'center',
        width: 100,
        height: 100,
        fill: "white",
        stroke: "2px black",
        
    })

    space.addChild(container3);

    //container 4
    var container4 = space.display.rectangle({
        x: cx - 150,
        y: cy + 100,
       // origin: { x: "center", y: "center" }, align: 'center',
        width: 100,
        height: 100,
        fill: "white",
        stroke: "2px black",
        
    })

    space.addChild(container4);


    //container 5
    var container5 = space.display.rectangle({
        x: cx,
        y: cy + 100,
       // origin: { x: "center", y: "center" }, align: 'center',
        width: 100,
        height: 100,
        fill: "white",
        stroke: "2px black",
        
    })

    space.addChild(container5);

    //container 6
    var container6 = space.display.rectangle({
        x: cx + 150,
        y: cy + 100,
       // origin: { x: "center", y: "center" }, align: 'center',
        width: 100,
        height: 100,
        fill: "white",
        stroke: "2px black",
        
    })

    space.addChild(container6);


    //container 7
    var container7 = space.display.rectangle({
        x: cx + 300,
        y: cy + 100,
       // origin: { x: "center", y: "center" }, align: 'center',
        width: 100,
        height: 100,
        fill: "white",
        stroke: "2px black",
        
    })

    space.addChild(container7);


    //container 8
    var container8 = space.display.rectangle({
        x: cx + 450,
        y: cy + 100,
       // origin: { x: "center", y: "center" }, align: 'center',
        width: 100,
        height: 100,
        fill: "white",
        stroke: "2px black",
        
    })

    space.addChild(container8);



       //first red marble
       var red1 = space.display.image({
        x: s1x,
        y: s1y,
        width: 100,
        height: 100,
        //origin: { x: "center", y: "center" },
        image: "static/experiments/alternate/materials/marbles/red.png"
    });

    

    red1.dragAndDrop({
       //snap item to containers
        end: function () {

            if ((container1.x+this.width >= this.x && container1.x-this.width <= this.x) &&
            (container1.y+this.height >= this.y && container1.y-this.height <= this.y)) {
            this.moveTo(container1.x,container1.y)
            }
            else if ((container2.x+this.width >= this.x && container2.x-this.width <= this.x) &&
            (container2.y+this.height >= this.y && container2.y-this.height <= this.y)) {
                this.moveTo(container2.x,container2.y)
            }
            else if ((container3.x+this.width >= this.x && container3.x-this.width <= this.x) &&
            (container3.y+this.height >= this.y && container3.y-this.height <= this.y)) {
                this.moveTo(container3.x,container3.y)
            }
            else if ((container4.x+this.width >= this.x && container4.x-this.width <= this.x) &&
            (container4.y+this.height >= this.y && container4.y-this.height <= this.y)) {
                this.moveTo(container4.x,container4.y)
            }
            else if ((container5.x+this.width >= this.x && container5.x-this.width <= this.x) &&
            (container5.y+this.height >= this.y && container5.y-this.height <= this.y)) {
                this.moveTo(container5.x,container5.y)
            }
            else if ((container6.x+this.width >= this.x && container6.x-this.width <= this.x) &&
            (container6.y+this.height >= this.y && container6.y-this.height <= this.y)) {
                this.moveTo(container6.x,container6.y)
            }
            else if ((container7.x+this.width >= this.x && container7.x-this.width <= this.x) &&
            (container7.y+this.height >= this.y && container7.y-this.height <= this.y)) {
                this.moveTo(container7.x,container7.y)
            }
            else if ((container8.x+this.width >= this.x && container8.x-this.width <= this.x) &&
            (container8.y+this.height >= this.y && container8.y-this.height <= this.y)) {
                this.moveTo(container8.x,container8.y)
            }
    
        }
    });


     //second red marble
       var red2 = space.display.image({
        x: s2x,
        y: s2y,
        width: 100,
        height: 100,
        //origin: { x: "center", y: "center" },
        image: "static/experiments/alternate/materials/marbles/red.png"
    });


    red2.dragAndDrop({
       //snap item to containers
       //container1
       end: function () {

        if ((container1.x+this.width >= this.x && container1.x-this.width <= this.x) &&
        (container1.y+this.height >= this.y && container1.y-this.height <= this.y)) {
        this.moveTo(container1.x,container1.y)
        } 
        else if ((container2.x+this.width >= this.x && container2.x-this.width <= this.x) &&
        (container2.y+this.height >= this.y && container2.y-this.height <= this.y)) {
        this.moveTo(container2.x,container2.y)
       }
       else if ((container3.x+this.width >= this.x && container3.x-this.width <= this.x) &&
            (container3.y+this.height >= this.y && container3.y-this.height <= this.y)) {
                this.moveTo(container3.x,container3.y)
            }
            else if ((container4.x+this.width >= this.x && container4.x-this.width <= this.x) &&
            (container4.y+this.height >= this.y && container4.y-this.height <= this.y)) {
                this.moveTo(container4.x,container4.y)
            }
            else if ((container5.x+this.width >= this.x && container5.x-this.width <= this.x) &&
            (container5.y+this.height >= this.y && container5.y-this.height <= this.y)) {
                this.moveTo(container5.x,container5.y)
            }
            else if ((container6.x+this.width >= this.x && container6.x-this.width <= this.x) &&
            (container6.y+this.height >= this.y && container6.y-this.height <= this.y)) {
                this.moveTo(container6.x,container6.y)
            }
            else if ((container7.x+this.width >= this.x && container7.x-this.width <= this.x) &&
            (container7.y+this.height >= this.y && container7.y-this.height <= this.y)) {
                this.moveTo(container7.x,container7.y)
            }
            else if ((container8.x+this.width >= this.x && container8.x-this.width <= this.x) &&
            (container8.y+this.height >= this.y && container8.y-this.height <= this.y)) {
                this.moveTo(container8.x,container8.y)
            }

    }
    });

    //third red marble
    var red3 = space.display.image({
        x: s3x,
        y: s3y,
        width: 100,
        height: 100,
        //origin: { x: "center", y: "center" },
        image: "static/experiments/alternate/materials/marbles/red.png"
    });


    red3.dragAndDrop({
       //snap item to containers
       //container1
       end: function () {

        if ((container1.x+this.width >= this.x && container1.x-this.width <= this.x) &&
        (container1.y+this.height >= this.y && container1.y-this.height <= this.y)) {
        this.moveTo(container1.x,container1.y)
        } 
        else if ((container2.x+this.width >= this.x && container2.x-this.width <= this.x) &&
        (container2.y+this.height >= this.y && container2.y-this.height <= this.y)) {
        this.moveTo(container2.x,container2.y)
       }
       else if ((container3.x+this.width >= this.x && container3.x-this.width <= this.x) &&
            (container3.y+this.height >= this.y && container3.y-this.height <= this.y)) {
                this.moveTo(container3.x,container3.y)
            }
            else if ((container4.x+this.width >= this.x && container4.x-this.width <= this.x) &&
            (container4.y+this.height >= this.y && container4.y-this.height <= this.y)) {
                this.moveTo(container4.x,container4.y)
            }
            else if ((container5.x+this.width >= this.x && container5.x-this.width <= this.x) &&
            (container5.y+this.height >= this.y && container5.y-this.height <= this.y)) {
                this.moveTo(container5.x,container5.y)
            }
            else if ((container6.x+this.width >= this.x && container6.x-this.width <= this.x) &&
            (container6.y+this.height >= this.y && container6.y-this.height <= this.y)) {
                this.moveTo(container6.x,container6.y)
            }
            else if ((container7.x+this.width >= this.x && container7.x-this.width <= this.x) &&
            (container7.y+this.height >= this.y && container7.y-this.height <= this.y)) {
                this.moveTo(container7.x,container7.y)
            }
            else if ((container8.x+this.width >= this.x && container8.x-this.width <= this.x) &&
            (container8.y+this.height >= this.y && container8.y-this.height <= this.y)) {
                this.moveTo(container8.x,container8.y)
            }

    }
    });





    //fourth red marble
    var red4 = space.display.image({
        x: s7x,
        y: s7y,
        width: 100,
        height: 100,
        //origin: { x: "center", y: "center" },
        image: "static/experiments/alternate/materials/marbles/red.png"
    });


    red4.dragAndDrop({
       //snap item to containers
       //container1
       end: function () {

        if ((container1.x+this.width >= this.x && container1.x-this.width <= this.x) &&
        (container1.y+this.height >= this.y && container1.y-this.height <= this.y)) {
        this.moveTo(container1.x,container1.y)
        } 
        else if ((container2.x+this.width >= this.x && container2.x-this.width <= this.x) &&
        (container2.y+this.height >= this.y && container2.y-this.height <= this.y)) {
        this.moveTo(container2.x,container2.y)
       }
       else if ((container3.x+this.width >= this.x && container3.x-this.width <= this.x) &&
            (container3.y+this.height >= this.y && container3.y-this.height <= this.y)) {
                this.moveTo(container3.x,container3.y)
            }
            else if ((container4.x+this.width >= this.x && container4.x-this.width <= this.x) &&
            (container4.y+this.height >= this.y && container4.y-this.height <= this.y)) {
                this.moveTo(container4.x,container4.y)
            }
            else if ((container5.x+this.width >= this.x && container5.x-this.width <= this.x) &&
            (container5.y+this.height >= this.y && container5.y-this.height <= this.y)) {
                this.moveTo(container5.x,container5.y)
            }
            else if ((container6.x+this.width >= this.x && container6.x-this.width <= this.x) &&
            (container6.y+this.height >= this.y && container6.y-this.height <= this.y)) {
                this.moveTo(container6.x,container6.y)
            }
            else if ((container7.x+this.width >= this.x && container7.x-this.width <= this.x) &&
            (container7.y+this.height >= this.y && container7.y-this.height <= this.y)) {
                this.moveTo(container7.x,container7.y)
            }
            else if ((container8.x+this.width >= this.x && container8.x-this.width <= this.x) &&
            (container8.y+this.height >= this.y && container8.y-this.height <= this.y)) {
                this.moveTo(container8.x,container8.y)
            }

    }
    });


//first blue marble
    var blue1 = space.display.image({
        x: s4x,
        y: s4y,
        width: 100,
        height: 100,
        //origin: { x: "center", y: "center" },
        image: "static/experiments/alternate/materials/marbles/blue.png"
    });
    

    blue1.dragAndDrop({
        //snap item to containers
        //container1
        end: function () {
 
         if ((container1.x+this.width >= this.x && container1.x-this.width <= this.x) &&
         (container1.y+this.height >= this.y && container1.y-this.height <= this.y)) {
         this.moveTo(container1.x,container1.y)
         } 
         else if ((container2.x+this.width >= this.x && container2.x-this.width <= this.x) &&
         (container2.y+this.height >= this.y && container2.y-this.height <= this.y)) {
         this.moveTo(container2.x,container2.y)
        }
        else if ((container3.x+this.width >= this.x && container3.x-this.width <= this.x) &&
            (container3.y+this.height >= this.y && container3.y-this.height <= this.y)) {
                this.moveTo(container3.x,container3.y)
            }
            else if ((container4.x+this.width >= this.x && container4.x-this.width <= this.x) &&
            (container4.y+this.height >= this.y && container4.y-this.height <= this.y)) {
                this.moveTo(container4.x,container4.y)
            }
            else if ((container5.x+this.width >= this.x && container5.x-this.width <= this.x) &&
            (container5.y+this.height >= this.y && container5.y-this.height <= this.y)) {
                this.moveTo(container5.x,container5.y)
            }
            else if ((container6.x+this.width >= this.x && container6.x-this.width <= this.x) &&
            (container6.y+this.height >= this.y && container6.y-this.height <= this.y)) {
                this.moveTo(container6.x,container6.y)
            }
            else if ((container7.x+this.width >= this.x && container7.x-this.width <= this.x) &&
            (container7.y+this.height >= this.y && container7.y-this.height <= this.y)) {
                this.moveTo(container7.x,container7.y)
            }
            else if ((container8.x+this.width >= this.x && container8.x-this.width <= this.x) &&
            (container8.y+this.height >= this.y && container8.y-this.height <= this.y)) {
                this.moveTo(container8.x,container8.y)
            }
 
     }
     });


     //second blue marble
    var blue2 = space.display.image({
        x: s5x,
        y: s5y,
        width: 100,
        height: 100,
        //origin: { x: "center", y: "center" },
        image: "static/experiments/alternate/materials/marbles/blue.png"
    });
    

    blue2.dragAndDrop({
        //snap item to containers
        //container1
        end: function () {
 
         if ((container1.x+this.width >= this.x && container1.x-this.width <= this.x) &&
         (container1.y+this.height >= this.y && container1.y-this.height <= this.y)) {
         this.moveTo(container1.x,container1.y)
         } 
         else if ((container2.x+this.width >= this.x && container2.x-this.width <= this.x) &&
         (container2.y+this.height >= this.y && container2.y-this.height <= this.y)) {
         this.moveTo(container2.x,container2.y)
        }
        else if ((container3.x+this.width >= this.x && container3.x-this.width <= this.x) &&
            (container3.y+this.height >= this.y && container3.y-this.height <= this.y)) {
                this.moveTo(container3.x,container3.y)
            }
            else if ((container4.x+this.width >= this.x && container4.x-this.width <= this.x) &&
            (container4.y+this.height >= this.y && container4.y-this.height <= this.y)) {
                this.moveTo(container4.x,container4.y)
            }
            else if ((container5.x+this.width >= this.x && container5.x-this.width <= this.x) &&
            (container5.y+this.height >= this.y && container5.y-this.height <= this.y)) {
                this.moveTo(container5.x,container5.y)
            }
            else if ((container6.x+this.width >= this.x && container6.x-this.width <= this.x) &&
            (container6.y+this.height >= this.y && container6.y-this.height <= this.y)) {
                this.moveTo(container6.x,container6.y)
            }
            else if ((container7.x+this.width >= this.x && container7.x-this.width <= this.x) &&
            (container7.y+this.height >= this.y && container7.y-this.height <= this.y)) {
                this.moveTo(container7.x,container7.y)
            }
            else if ((container8.x+this.width >= this.x && container8.x-this.width <= this.x) &&
            (container8.y+this.height >= this.y && container8.y-this.height <= this.y)) {
                this.moveTo(container8.x,container8.y)
            }
 
     }
     });


     //third blue marble
    var blue3 = space.display.image({
        x: s6x,
        y: s6y,
        width: 100,
        height: 100,
        //origin: { x: "center", y: "center" },
        image: "static/experiments/alternate/materials/marbles/blue.png"
    });
    

    blue3.dragAndDrop({
        //snap item to containers
        //container1
        end: function () {
 
         if ((container1.x+this.width >= this.x && container1.x-this.width <= this.x) &&
         (container1.y+this.height >= this.y && container1.y-this.height <= this.y)) {
         this.moveTo(container1.x,container1.y)
         } 
         else if ((container2.x+this.width >= this.x && container2.x-this.width <= this.x) &&
         (container2.y+this.height >= this.y && container2.y-this.height <= this.y)) {
         this.moveTo(container2.x,container2.y)
        }
        else if ((container3.x+this.width >= this.x && container3.x-this.width <= this.x) &&
            (container3.y+this.height >= this.y && container3.y-this.height <= this.y)) {
                this.moveTo(container3.x,container3.y)
            }
            else if ((container4.x+this.width >= this.x && container4.x-this.width <= this.x) &&
            (container4.y+this.height >= this.y && container4.y-this.height <= this.y)) {
                this.moveTo(container4.x,container4.y)
            }
            else if ((container5.x+this.width >= this.x && container5.x-this.width <= this.x) &&
            (container5.y+this.height >= this.y && container5.y-this.height <= this.y)) {
                this.moveTo(container5.x,container5.y)
            }
            else if ((container6.x+this.width >= this.x && container6.x-this.width <= this.x) &&
            (container6.y+this.height >= this.y && container6.y-this.height <= this.y)) {
                this.moveTo(container6.x,container6.y)
            }
            else if ((container7.x+this.width >= this.x && container7.x-this.width <= this.x) &&
            (container7.y+this.height >= this.y && container7.y-this.height <= this.y)) {
                this.moveTo(container7.x,container7.y)
            }
            else if ((container8.x+this.width >= this.x && container8.x-this.width <= this.x) &&
            (container8.y+this.height >= this.y && container8.y-this.height <= this.y)) {
                this.moveTo(container8.x,container8.y)
            }
 
     }
     });



//fourth blue marble
var blue4 = space.display.image({
    x: s8x,
    y: s8y,
    width: 100,
    height: 100,
    //origin: { x: "center", y: "center" },
    image: "static/experiments/alternate/materials/marbles/blue.png"
});


blue4.dragAndDrop({
    //snap item to containers
    //container1
    end: function () {

     if ((container1.x+this.width >= this.x && container1.x-this.width <= this.x) &&
     (container1.y+this.height >= this.y && container1.y-this.height <= this.y)) {
     this.moveTo(container1.x,container1.y)
     } 
     else if ((container2.x+this.width >= this.x && container2.x-this.width <= this.x) &&
     (container2.y+this.height >= this.y && container2.y-this.height <= this.y)) {
     this.moveTo(container2.x,container2.y)
    }
    else if ((container3.x+this.width >= this.x && container3.x-this.width <= this.x) &&
        (container3.y+this.height >= this.y && container3.y-this.height <= this.y)) {
            this.moveTo(container3.x,container3.y)
        }
        else if ((container4.x+this.width >= this.x && container4.x-this.width <= this.x) &&
        (container4.y+this.height >= this.y && container4.y-this.height <= this.y)) {
            this.moveTo(container4.x,container4.y)
        }
        else if ((container5.x+this.width >= this.x && container5.x-this.width <= this.x) &&
        (container5.y+this.height >= this.y && container5.y-this.height <= this.y)) {
            this.moveTo(container5.x,container5.y)
        }
        else if ((container6.x+this.width >= this.x && container6.x-this.width <= this.x) &&
        (container6.y+this.height >= this.y && container6.y-this.height <= this.y)) {
            this.moveTo(container6.x,container6.y)
        }
        else if ((container7.x+this.width >= this.x && container7.x-this.width <= this.x) &&
        (container7.y+this.height >= this.y && container7.y-this.height <= this.y)) {
            this.moveTo(container7.x,container7.y)
        }
        else if ((container8.x+this.width >= this.x && container8.x-this.width <= this.x) &&
        (container8.y+this.height >= this.y && container8.y-this.height <= this.y)) {
            this.moveTo(container8.x,container8.y)
        }

 }
 });

 space.addChild(red1);
 space.addChild(blue1);
 space.addChild(red2);
 space.addChild(blue2);
 space.addChild(red3);
 space.addChild(blue3);
 space.addChild(red4);
 space.addChild(blue4);








     //make clicking the finish button bring up the continue box
     finished.bind('click tap', function () {space.scenes.load('continue_check')});
     //make clicking the no button in the continue box go back
     continue_box.no.bind('click tap', function () {space.scenes.unload('continue_check')});


     stim = [red1,red2,blue1]
     continue_box.yes.bind('click tap', function () {
        /*for (s of stim) {
            if ((s.x = container1.x) && (s.y = container1.y)) {
                assignment = 1
            } else if ((s.x = container2.x) && (s.y = container2.y)) {
                assignment = 2
            }
            params['results'].push(
                [s.image, s.x, s.y, assignment]
            )
        }*/


        params['results'].push([red1.image, red1.x, red1.y]);
        params['results'].push([red2.image, red2.x, red2.y]);
        params['results'].push([red3.image, red3.x, red3.y]);
        params['results'].push([red4.image, red4.x, red4.y]);

        params['results'].push([blue1.image, blue1.x, blue1.y]);
        params['results'].push([blue2.image, blue2.x, blue2.y]);
        params['results'].push([blue3.image, blue3.x, blue3.y]);
        params['results'].push([blue4.image, blue4.x, blue4.y]);





        

        space.destroy(space)
        document.getElementById('main').innerHTML = ''
        next()
    })


        

  


},

    
    initCanvas: function () {
        canvas = document.createElement('canvas', {id: 'canvas', style: 'position:absolute;'})
        document.getElementById('main').appendChild(canvas)
        
        var ctx = canvas.getContext('2d');
        // ctx.lineWidth = 2;
        ctx.canvas.width  = window.innerWidth - 20;
        ctx.canvas.height = window.innerHeight - 20;

        return canvas
    },






    initListeners: function (space) {
        window.addEventListener('resize', function () {
            space.width = window.innerWidth - 20;
            space.height = window.innerHeight - 20;
        }, false);
    },



    initContinueBox: function (space) {
        box = {}

        box.frame = space.display.rectangle({
            x: cx,
            y: cy,
            origin: { x: "center", y: "center" }, align: 'center',
            width: 800,
            height:400,
            fill: "rgb(190,190,190)",
            stroke: "10px #079",
            join: "round",
        })

        box.yes = space.display.rectangle({
            x: 100,
            y: 50,
            origin: { x: "center", y: "center" }, align: 'center',
            width: 160,
            height: 60,
            fill: "#000000",
            stroke: "10px #000000",
            join: "round",
        })
        box.yes.addChild(
            space.display.text({
                x: 0,
                y: 0,
                origin: { x: "center", y: "center" }, align: 'center',
                align: "center",
                font: "bold 25px sans-serif",
                text: "Yes",
                fill: "#ffffff",
                zIndex: "front",
            })
        )
        box.frame.addChild(box.yes)

        box.no = space.display.rectangle({
            x: -100,
            y: 50,
            origin: { x: "center", y: "center" }, align: 'center',
            width: 160,
            height: 60,
            fill: "#000000",
            stroke: "10px #000000",
            join: "round",
        })
        box.no.addChild(
            space.display.text({
                x: 0,
                y: 0,
                origin: { x: "center", y: "center" }, align: 'center',
                align: "center",
                font: "bold 25px sans-serif",
                text: "No",
                fill: "#ffffff",
                zIndex: "front",
            })
        )
        box.frame.addChild(box.no)

        box.frame.addChild(
            space.display.text({
                x: 0,
                y: -100,
                origin: { x: "center", y: "center" }, align: 'center',
                align: "center",
                font: "bold 25px sans-serif",
                text: "Are you happy with your selection? Click Yes to Continue...",
                fill: "#000000",
                zIndex: "front",
            }) 
        )

        space.scenes.create('continue_check', function () {
            this.add(box.frame)
        })

        return box
    },




}