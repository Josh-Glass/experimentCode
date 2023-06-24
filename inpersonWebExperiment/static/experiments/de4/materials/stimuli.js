var stimuli = {

    startingInstructions: {
        '1': "<p style='font-size: 18px;'>\
                Hi! Thanks for participating.\
                <br><br>\
                In this experiment, you will play the role of an interior designer who's organizing the furniture in a new house. On each trial, you will be shown a pair of lamps. Your task is to judge whether or not the two lamps would make an acceptable arrangement. \
                <br><br>\
                Lamps can vary in their height, or their shade color, or their shape. Consider this information when making your decision.\
                <br><br>\
                You will be given feedback on each trial indicating whether your guess was correct or incorrect.\
                <br><br>\
                Afterwards, there will be a test phase to see how well you learned.\
                <br><br>\
                Good Luck!\
                <br><br>\
                Click the 'Next' button to begin the experiment.\
            <p>"
        ,
    },

    generalizationPhaseInstructions: "\
        <p style='font-size: 18px;'>\
            Nice work! Thanks for completing that phase of the experiment. \
            <br><br>\
            In the next phase, you will again be shown pairs of lamps. Your task is to decide if they would make a good arrangement.\
            <br><br>\
            This time, you will not receive feedback.\
            <br><br>\
            Good Luck!\
            <br><br>\
            Click the 'Next' button to begin the experiment. \
            <br><br>\
        <p>\
    ",

    exitInstructions: "<p style='font-size: 18px;'>\
            That's all. Thanks for participating in this phase of the study. \
            <br><br> \
            Click the 'Next' button to move on to the next phase.\
        <p>"
    ,

    stimMap: {
        '000': 'static/experiments/de4/materials/stim/000.png',
        '001': 'static/experiments/de4/materials/stim/001.png',
        '010': 'static/experiments/de4/materials/stim/010.png',
        '011': 'static/experiments/de4/materials/stim/011.png',
        '100': 'static/experiments/de4/materials/stim/100.png',
        '101': 'static/experiments/de4/materials/stim/101.png',
        '110': 'static/experiments/de4/materials/stim/110.png',
        '111': 'static/experiments/de4/materials/stim/111.png',
    },


    possiblePairs: {
        // comparative representation : [pairs of actual stimuli that instantiate it]
        '000': [['000', '000'], ['001', '001'], ['010', '010'], ['011', '011'], ['100', '100'], ['101', '101'], ['110', '110'], ['111', '111']], 
        '001': [['000', '001'], ['010', '011'], ['100', '101'], ['110', '111']], 
        '010': [['000', '010'], ['001', '011'], ['100', '110'], ['101', '111']], 
        '011': [['000', '011'], ['001', '010'], ['100', '111'], ['101', '110']], 
        '100': [['000', '100'], ['001', '101'], ['010', '110'], ['011', '111']], 
        '101': [['000', '101'], ['001', '100'], ['010', '111'], ['011', '110']], 
        '110': [['000', '110'], ['001', '111'], ['010', '100'], ['011', '101']], 
        '111': [['000', '111'], ['001', '110'], ['010', '101'], ['011', '100']],
    },

    stimIDs: ['000','001','010','011','100','101','110','111'],

    structures: {
        '1': [0,0,0,0,1,1,1,1],
        '2': [0,0,1,1,1,1,0,0],
        '3': [0,0,1,0,0,1,1,1],
        '4': [0,0,0,1,0,1,1,1],
        '4a': [0,0,0,1,0,1,1,1], // incorrect fix!!
        '5': [1,0,0,0,0,1,1,1],
        '6': [0,1,1,0,1,0,0,1],
    },

    samplePairSpace: function (structure_dims) {
        // console.log(structure_dims)
        random_pair = stimuli.possiblePairs[structure_dims][stimuli.shuffle([...Array(stimuli.possiblePairs[structure_dims].length).keys()])[0]]
        
        return [ stimuli.stimMap[random_pair[0]], stimuli.stimMap[random_pair[1]] ]

    },

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

    buildStimulus: function (img, space) {
        imgStim = space.display.image({
            origin: { x: "center", y: "center" },
            image: img,
        })
        return imgStim
    },


}
