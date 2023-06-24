var edgeClassification = {
    start: function(params, next) {

        params['results'].push(['trial','block','connected','s1','s2','response','accuracy','rt','counter'])

        space = oCanvas.create({
            canvas: edgeClassification.initCanvas(),
            background: 'rgb(208, 213, 219)',
        })

        edgeClassification.initResizeListener()

        cX = space.canvasElement.width / 2
        cY = space.canvasElement.height / 2

        mX = space.canvasElement.width
        mY = space.canvasElement.height

        c = params['c']
        function counterflip(v,c) {return Math.abs((1 - v) - (1 - c))}

        // event state
        var s = {
            initTime: new Date().getTime(),
            acc_history: [],
            rt: 0,
            last_response: null,
            acc: null,
            trial: 0,
            block: 0,
            state: 'selection',
            finish_early: false,
            block_order: edgeClassification.generateBlockOrder(params['pairs']),
            connection: null,
        }

        s['connection'] = counterflip(s['block_order'][s['trial']][1],c)
        elements = edgeClassification.initElements()
        edgeClassification.initStim(
          s['block_order'][s['trial']][0],
        )

        space.scenes.load('selection')

        // ___ Event Logic ___
        function selection(response) {
            s['state'] = 'block'
            s['rt'] = new Date().getTime() - s['initTime']
            s['last_response'] = response

            if (params['feedback'] == true) {
                if (response == 'yes') { // <-- if user pressed "yes"
                    if (s['connection'] == 1) {
                        s['acc'] = 1; feedback = "Correct :) This is a good arrangement!"
                    } else {
                        s['acc'] = 0; feedback = "Nope...; This is not a good arrangement..."
                    }
                } else if (response == 'no') { // <-- if user pressed "no"
                    if (s['connection'] == 1) {
                        s['acc'] = 0; feedback = "Nope...; This is actually a good arrangement..."
                    } else {
                        s['acc'] = 1; feedback = "Correct! :) This is not a good arrangement!"
                    }
                }
                elements.feedbackTxt['obj'].text = feedback
            }

            setTimeout( function () {
                space.scenes.unload('selection')
                if (s['acc'] == 0) {
                    space.scenes.load('incorrect')
                } else if (s['acc'] == 1) {
                    space.scenes.load('correct')
                }
                setTimeout( function () {
                    s['state'] = 'continue'
                    space.scenes.load('continue')
                }, 500)
            }, 50)
        }

        function next_trial() {
            space.scenes.unload('continue')
            space.scenes.unload('incorrect'); space.scenes.unload('correct')
            if (s['acc'] == 0) {
                space.scenes.unload('incorrect')
            } else if (s['acc'] == 1) {
                space.scenes.unload('correct')
            }

            params['results'].push([s['trial'], s['block'], s['block_order'][s['trial']][1], s1path, s2path, s['last_response'], s['acc'], s['rt'], c])

            if (params['feedback'] == true) {
                s['acc_history'].push(s['acc'])

                if (s['acc_history'].length > 40) {
                    if (s['block'] > 0) {
                        if ( edgeClassification.mean(s['acc_history'].slice(-40))  > .9) { // <-- the reduce thing calculates the mean (because apparently a sum function didnt make the cut in javascripts standard lib (despite other bs making the cut; sigh))
                            edgeClassification.destroySpace()
                            next()
                        }
                    }
                }
            }

            s['trial'] += 1
            if (s['trial'] >= s['block_order'].length) {
                s['trial'] = 0
                s['block'] += 1
                if (s['block'] >= params['n_blocks']) {
                    edgeClassification.destroySpace()
                    next()
                }
                s['block_order'] = edgeClassification.generateBlockOrder(params['pairs'])
            }

            s['connection'] = counterflip(s['block_order'][s['trial']][1],c)

            // s1.obj.remove()
            // s2.obj.remove()
            space.removeChild(s1.obj, redraw = true)
            space.removeChild(s2.obj, redraw = true)

            setTimeout( function () {
                edgeClassification.initStim(
                    s['block_order'][s['trial']][0],
                )
                space.scenes.load('selection')
                s['state'] = 'selection'
                s['initTime'] = new Date().getTime()
            }, 200)

        }

        // - Bind Actions to Elements -
        elements['yes']['obj'].bind('click tap', function () {
            if (s['state'] == 'selection') {
                selection('yes')
            }
        })

        elements['no']['obj'].bind('click tap', function () {
            if (s['state'] == 'selection') {
                selection('no')
            }
        })

        elements['continue']['obj'].bind('click tap', function () {
            if (s['state'] == 'continue') {
                s['state'] = 'block'
                next_trial()
            }
        })

        keyfuncs = function(e) {
            if (s['state'] == 'selection') {
                // c = respA (70)
                if (e.key == 'f') {
                    selection('yes')
                }

                // n = respB (74)
                if (e.key == 'j') {
                    selection('no')
                }
            } else if (s['state'] == 'continue') {
                // space == continue
                if (e.key == ' ') {
                    s['state'] = 'block'
                    next_trial()
                }
            }
        }

        window.addEventListener('keydown', keyfuncs, false)
    },


    //-----------------------------------------------------v

    initElements: function () {

        elements = {}

        // ___ Phase 1 (Selection) ___
        elements.yes = {
            obj: space.display.rectangle({
                origin: { x: "center", y: "center" }, align: 'center',
                width: cX * .96,
                height: 90,
                fill: "rgba(240,240,240, .8)",
                // stroke: "4px black",
                join: "round",
            }),
            setlocation: function() {
                this['obj'].x = cX/2
                this['obj'].y = mY - this['obj'].height/2
                this['obj'].width = cX * .96
            }
        }

        elements.yes['obj'].addChild(
            space.display.text({
                x: 0,
                y: 0,
                origin: { x: "center", y: "center" }, align: 'center',
                align: "center",
                font: "bold 35px sans-serif",
                text: "Yes\n(press 'f' key)",
                fill: "rgba(0,0,0,1)",
                zIndex: "front",
            })
        )


        elements.no = {
            obj: space.display.rectangle({
                origin: { x: "center", y: "center" }, align: 'center',
                width: cX * .96,
                height: 90,
                fill: "rgba(240,240,240, .8)",
                // stroke: "4px black",
                join: "round",
            }),
            setlocation: function() {
              this['obj'].x = cX + cX/2
              this['obj'].y = mY - this['obj'].height/2
              this['obj'].width = cX * .96
            }
        }

        elements.no['obj'].addChild(
            space.display.text({
                x: 0,
                y: 0,
                origin: { x: "center", y: "center" }, align: 'center',
                align: "center",
                font: "bold 35px sans-serif",
                text: "No\n(press 'j' key)",
                fill: "rgba(0,0,0,1)",
                zIndex: "front",
            })
        )



        elements.titleInstructions = {
            obj: space.display.rectangle({
                origin: { x: "center", y: "center" }, align: 'center',
                fill: "rgba(240,240,240, .8)",
                width: mX,
                height: 65,
                // zIndex: "front",
            }),
            setlocation: function() {
                this['obj'].x = cX
                this['obj'].y = 20
                this['obj'].width = mX
            }
        }
        elements.titleInstructions['obj'].addChild(
            space.display.text({
                x: 0,
                y: 10,
                origin: { x: "center", y: "center" }, align: 'center',
                align: "center",
                font: "bold 48px sans-serif",
                text: "Can these lamps go together?",
                fill: "rgba(0,0,0,1)",
                zIndex: "front",
            })
        )

        space.scenes.create('selection', function () {
            this.add(elements.yes['obj'])
            this.add(elements.no['obj'])
            this.add(elements.titleInstructions['obj'])
        })


        // ___ Phase 2 (Feedback) ___
        elements.feedbackTxtBackground = {
            obj: space.display.rectangle({
                origin: { x: "center", y: "center" }, align: 'center',
                fill: "rgba(255,255,255,.8)",
                width: mX,
                height: 80,
            }),
            setlocation: function() {
                this['obj'].x = cX
                this['obj'].y = mY - 140
                this['obj'].width = mX
            }
        }
        elements.feedbackTxt = {
            obj: space.display.text({
                origin: { x: "center", y: "center" }, align: 'center',
                align: "center",
                font: "bold 35px sans-serif",
                text: "-",
                fill: "rgba(0,0,0,1)",
                zIndex: "front",
            }),
            setlocation: function() {
                this['obj'].x = cX
                this['obj'].y = mY - 140
            }
        }
        elements.feedbackTxtBackground['obj'].addChild(elements.feedbackTxt['obj'])

        elements.checkSymbol = {
            obj: space.display.rectangle({
                origin: { x: "center", y: "center" }, align: 'center',
                width: 185 * .5,
                height: 75 * .5,
                rotation: 45,
                fill: "rgba(0, 217, 54, 1)",
                // stroke: "5px rgba(0, 0, 0, .6)",
                join: "round",
            }),
            setlocation: function() {
                this['obj'].x = cX - 40
                this['obj'].y = mY - 270
            }
        }
        elements.checkSymbol['obj'].addChild(
            space.display.rectangle({
                x: 50,
                y: -53,
                origin: { x: "center", y: "center" }, align: 'center',
                width: 285 * .5,
                height: 75 * .5,
                rotation: 90,
                fill: "rgba(0, 217, 54, 1)",
                // stroke: "5px rgba(0, 0, 0, .6)",
                join: "round",
            })
          )
          // space.addChild(elements.checkSymbol['obj'])





          elements.xSymbol = {
              obj: space.display.rectangle({
                  origin: { x: "center", y: "center" }, align: 'center',
                  width: 295 * .5,
                  height: 80 * .5,
                  rotation: 45,
                  fill: "rgba(217, 0, 0, 1)",
                  // stroke: "5px rgba(0, 0, 0, .6)",
                  join: "round",
              }),
              setlocation: function () {
                  this['obj'].x = cX
                  this['obj'].y = mY - 290
              }
          }
          elements.xSymbol['obj'].addChild(
              space.display.rectangle({
                  x: 0,
                  y: 0,
                  origin: { x: "center", y: "center" }, align: 'center',
                  width: 295 * .5,
                  height: 80 * .5,
                  rotation: 90,
                  fill: "rgba(217, 0, 0, 1)",
                  // stroke: "5px rgba(0, 0, 0, .6)",
                  join: "round",
              })
          )

        space.scenes.create('correct', function () {
            this.add(elements.checkSymbol['obj'])
            this.add(elements.feedbackTxtBackground['obj'])
            this.add(elements.feedbackTxt['obj'])
        })

        space.scenes.create('incorrect', function () {
            this.add(elements.xSymbol['obj'])
            this.add(elements.feedbackTxtBackground['obj'])
            this.add(elements.feedbackTxt['obj'])
        })

        // ___ Phase 3 (Continue) ___
        elements.continue = {
            obj: space.display.rectangle({
                origin: { x: "center", y: "center" }, align: 'center',
                height: 90,
                width: 360,
                fill: "rgba(240,240,240)",
                stroke: "4px black",
                join: "round",
            }),
            setlocation: function () {
                this['obj'].x = cX
                this['obj'].y = mY - 50
            }
        }
        elements.continue['obj'].addChild(
            space.display.text({
                x: 0,
                y: 0,
                origin: { x: "center", y: "center" }, align: 'center',
                align: "center",
                font: "bold 35px sans-serif",
                text: "Continue\n(press 'space')",
                fill: "rgba(0,0,0,1)",
                zIndex: "front",
            })
        )

        space.scenes.create('continue', function () {
            this.add(elements.continue['obj'])
        })

        elements_list = [
            elements.yes,
            elements.no,
            elements.titleInstructions,
            elements.feedbackTxt,
            elements.feedbackTxtBackground,
            elements.checkSymbol,
            elements.xSymbol,
            elements.continue,
        ]

        for (let i of [...Array(elements_list.length).keys()]) {
            elements_list[i].setlocation()
        }

        return elements
    },

    //-----------------------------------------------------v

    initStim: function (stimID) {

        [s1path, s2path] = stimuli.samplePairSpace(stimID)

        flip = stimuli.shuffle([-1,1])
        width = 200

        s1 = {
            obj: edgeClassification.buildStimulus(s1path, space),
            setlocation: function() {
                this.obj.x = cX + (width * flip[0])
                this.obj.y = cY + 0
            }
        }
        s1.setlocation()

        s2 = {
            obj: edgeClassification.buildStimulus(s2path, space),
            setlocation: function() {
                this.obj.x = cX + (width * flip[1])
                this.obj.y = cY + 0
            }
        }
        s2.setlocation()


        space.addChild(s1.obj)
        space.addChild(s2.obj)

    },

    buildStimulus: function (img, space) {
        imgStim = space.display.image({
            origin: { x: "center", y: "center" },
            image: img,
        })
        return imgStim
    },

    //-----------------------------------------------------v

    initCanvas: function () {
        canvas = document.createElement('canvas', {id: 'canvas', style: 'position:absolute;'})
        document.getElementById('main').appendChild(canvas)

        var ctx = canvas.getContext('2d');
        // ctx.lineWidth = 2;

        ctx.canvas.width  = window.innerWidth - 20;
        ctx.canvas.height = window.innerHeight - 20;

        return canvas
    },

    //-----------------------------------------------------v

    generateBlockOrder: function (objects) {
        let block = []
        idx = [...Array(objects.length).keys()] // from ben @ https://stackoverflow.com/a/10050831
        idx = edgeClassification.shuffle(idx)

        for (let i of idx) {
            block.push([
                objects[i][0], objects[i][1]
            ])
        }

        return block
    },

    //----------------------------------------------------v

    shuffle: function (array) { // from mike bostok @ https://bost.ocks.org/mike/shuffle/
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;

    },

    //----------------------------------------------------v

    initResizeListener: function () {
        window.addEventListener('resize', function () {
            space.width = window.innerWidth - 20;
            space.height = window.innerHeight - 20;

            cX = space.canvasElement.width / 2
            cY = space.canvasElement.height / 2

            mX = space.canvasElement.width
            mY = space.canvasElement.height

            for (let i of [...Array(elements_list.length).keys()]) {
                elements_list[i].setlocation()
            }
            s1.setlocation()
            s2.setlocation()
        }, false);
    },

    //----------------------------------------------------v

    mean: function(numbers) {
        return edgeClassification.sum(numbers) / numbers.length;
    },

    sum: function(numbers) {
        var total = 0;
        for(var i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        return total;
    },

    //----------------------------------------------------v

    destroySpace: function () {
        space.destroy(space)
        window.removeEventListener('keydown', keyfuncs, false)
        document.getElementById('main').innerHTML = ''
    },
}
