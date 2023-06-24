'''
Experiment
'''

## Python Standard Library
import sys
import os
import datetime
import time

## external dependencies
from psychopy import visual

## Internal Dependencies
import pyxpr.utils
from pyxpr.events import initializer, instructions, classification

settings = {
    'experiment_id': 'exp',

	'save_data': True,
    'data_folder': './subject_data',
	'show_initial_dialogue': True,

	'subject_data_folder': './subject_data',
    'window_color': [1,1,1],
    'debug_mode': False,
}


# # # # # # # # # # # # # # # # # 
# 
#  SETUP
# 
# # # # # # # # # # # # # # # # # 

settings['experiment_time'] = '-'.join([str(d) for d in datetime.datetime.now().timetuple()][:6])

# Show initial dialogue window if True
if settings['show_initial_dialogue'] == True:
	initial_info = initializer.run(conditions=list([1,2]))
else:
	initial_info = ['debug', 1]

# Define Subject Dictionary (this is where we'll store all the information about the subject)
subject = {
	'id': str(initial_info[1]),
	'condition': int(initial_info[1]),
	'datafile_path': os.path.join(settings['data_folder'], str(initial_info[0]) + '_' + settings['experiment_time'] + '.csv')
}

if settings['save_data'] == True:
	with open(subject['datafile_path'], 'w'):
		pass

if subject['id'] == 'debug':
	settings['debug_mode'] = True

## build experiment window (little bit faster to pass the window as an argument to each event rather than making a new one on the fly each time an event changes)
if settings.get('window_size', 'full') == 'full':
	win = visual.Window(fullscr = True, units = 'pix', color = settings.get('window_color', [1,1,1]))
else:
	win = visual.Window(settings['window_size'], units = 'pix', color = settings.get('window_color', [1,1,1]))






# # # # # # # # # # # # # # # # # 
# 
#  Run Experiment
# 
# # # # # # # # # # # # # # # # # 




# - - - Phase 1 - Training (with feedback) - - - 

# instructions function
if int(initial_info[1]) == 1:
    instructions.run(
        text_file = 'materials/instructions/training.txt',	
        
        window = win,
        debug_mode = settings['debug_mode'],
        window_color = settings['window_color'],
        continue_option = 'click',
    )



    stimuli_train = [
        'materials/images_con1/c1_0.png',
        'materials/images_con1/c1_1.png',
        'materials/images_con1/c1_2.png',
        'materials/images_con1/c1_3.png',
        'materials/images_con1/c1_4.png',
        'materials/images_con1/c1_5.png',
        'materials/images_con1/c1_9.png',
        'materials/images_con1/c1_10.png',
        'materials/images_con1/c1_11.png',
        'materials/images_con1/c1_6.png',
        'materials/images_con1/c1_7.png',
        'materials/images_con1/c1_8.png',
    ]

    labels_train = [
        'Alpha',
        'Alpha',
        'Alpha',
        'Beta',
        'Beta',
        'Beta',
        'Alpha',
        'Alpha',
        'Alpha',
        'Beta',
        'Beta',
        'Beta',
    ]

    # classification phase function
    classification.run(
        stimuli_train,
        labels = labels_train,

        phase_id = 'training_phase_1',
        supervised = True, # <-- this means there will be feedback
        randomize_presentation = True,
        num_blocks = 3,

        window = win,
        experiment_id = settings['experiment_id'],
        subject_info = subject,
        save_data = True,
        debug_mode = False,
    )




    # - - - Phase 2 - Test (no feedback) - - -

    # instructions function
    instructions.run(
        text_file = './materials/instructions/test.txt',

        window = win,
        debug_mode = settings['debug_mode'],
        window_color = settings['window_color'],
        continue_option = 'click',
    )


    stimuli_test = [
        'materials/images_con1/c1_12.png',
        'materials/images_con1/c1_13.png',
        'materials/images_con1/c1_14.png',
    ]

    labels_test = [
        'test',
        'test',
        'test',
    ]

    # classification phase function
    classification.run(
        stimuli_train + stimuli_test,
        labels = labels_train + labels_test,
        response_btn_labels = ['Alpha','Beta'],

        phase_id = 'test_phase',
        supervised = False, # <-- no feedback
        randomize_presentation = True,
        num_blocks = 1,

        window = win,
        experiment_id = settings['experiment_id'],
        subject_info = subject,
        save_data = True,
        debug_mode = settings['debug_mode'],
    )
else:
    instructions.run(
        text_file = 'materials/instructions/training_con2.txt',	
        
        window = win,
        debug_mode = settings['debug_mode'],
        window_color = settings['window_color'],
        continue_option = 'click',
    )



    stimuli_train = [
        'materials/stim/i-0.png',
        'materials/stim/i-1.png',
        'materials/stim/i-2.png',
        'materials/stim/i-3.png',
        'materials/stim/i-4.png',
        'materials/stim/i-5.png',
        'materials/stim/i-6.png',
        'materials/stim/i-7.png',
        'materials/stim/i-8.png',
        'materials/stim/i-9.png',
        'materials/stim/i-10.png',
        'materials/stim/i-11.png',
    ]

    labels_train = [
        'Alpha',
        'Alpha',
        'Alpha',
        'Alpha',
        'Alpha',
        'Alpha',
        'Beta',
        'Beta',
        'Beta',
        'Beta',
        'Beta',
        'Beta',
    ]

    # classification phase function
    classification.run(
        stimuli_train,
        labels = labels_train,

        phase_id = 'training_phase_1',
        supervised = True, # <-- this means there will be feedback
        randomize_presentation = True,
        num_blocks = 3,

        window = win,
        experiment_id = settings['experiment_id'],
        subject_info = subject,
        save_data = True,
        debug_mode = False,
    )




    # - - - Phase 2 - Test (no feedback) - - -

    # instructions function
    instructions.run(
        text_file = './materials/instructions/test.txt',

        window = win,
        debug_mode = settings['debug_mode'],
        window_color = settings['window_color'],
        continue_option = 'click',
    )


    stimuli_test = [
        'materials/stim/i-12.png',
        'materials/stim/i-13.png',
        'materials/stim/i-14.png',
    ]

    labels_test = [
        'test',
        'test',
        'test',
    ]

    # classification phase function
    classification.run(
        stimuli_train + stimuli_test,
        labels = labels_train + labels_test,
        response_btn_labels = ['Alpha','Beta'],

        phase_id = 'test_phase',
        supervised = False, # <-- no feedback
        randomize_presentation = True,
        num_blocks = 1,

        window = win,
        experiment_id = settings['experiment_id'],
        subject_info = subject,
        save_data = True,
        debug_mode = settings['debug_mode'],
    )

# - - - Exit Page - - -
instructions.run(
    text_file = './materials/instructions/exit.txt',

    window = win,
    debug_mode = settings['debug_mode'],
    window_color = settings['window_color'],
    continue_option = 'click',
)
