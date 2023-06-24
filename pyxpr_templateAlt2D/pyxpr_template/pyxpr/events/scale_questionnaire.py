## Python Standard Library
import sys
import os
import random
import csv

## External Dependencies
from psychopy import core, gui, visual, event

## Internal Dependencies
sys.path.append(os.path.abspath(os.path.join(__file__, '..')))
import event_utils



##__Judgement Task
def run(
	question_list, # <-- list of strings
	randomize_presentation = False,

	experiment_id = 'experiment',
	phase_id = 'scale_questionnaire',
	subject_info = None,
	save_data = False,

	window = None,

	text_ypos = 150, # <-- y position of the row of stimuli
	text_padding = 10,

	click_instructions_txt = 'Use the slider below to provide your answer.',
	click_instructions_txt_color = [-1,-1,-1],
	click_instructions_position = [0, -120],

	continue_txt_position = [0, -130],
	continue_txt_color = [-1,-1,-1],
	rating_scale_font = 'Arial',
	rating_scale_font_size = 1,
	rating_scale_choices = ['low', 'high'],
	rating_scale_min = 0,
	rating_scale_max = 100,
	rating_scale_message = '',
	rating_scale_marker = 'circle', # <-- options: {'circle', 'triangle', 'glow', 'slider', 'hover'}
	rating_scaler_marker_color = 'grey',
	rating_scale_position = [0,-250],
	rating_scale_length = 1.2,
	rating_scale_size = 1,
	rating_scale_show_value = False,
	rating_scale_density = 100,

	quit_keys = ['escape'],
	debug_mode = False,
):

	# Initialize Main Psychopy win if one isn't included
	if window == None:
		window = event_utils.build_window()

	cursor = event.Mouse() # set initial cursor
	timer = core.Clock()

	if subject_info == None:
		subject_info = {
			'id': '0000',
			'condition': 0,
			'datafile_path': './subject_data.csv'
		}

	## Prepare Stimuli and Text Objects
	object_bin = {}

	object_bin['question'] = visual.TextStim(window, pos=[0,0], color=text_color) # create Text Stim Object

	object_bin['response_scale'] = visual.RatingScale(
		window,
		labels = rating_scale_choices,
		low = rating_scale_min,
		high = rating_scale_max,
		precision = rating_scale_density,
		marker = rating_scale_marker,
		markerColor = rating_scaler_marker_color,
		pos = rating_scale_position,
		size = rating_scale_size,
		stretch = rating_scale_length,
		textFont = rating_scale_font,
		textSize = rating_scale_font_size,
		showValue = rating_scale_show_value,
		acceptSize = 2,
		textColor = [-1,-1,-1],
		lineColor = [-1,-1,-1],
		mouseOnly = True,
		scale = None,

	)

	object_bin['click_msg'] = visual.TextStim(
		window,
		text = click_instructions_txt,
		pos = click_instructions_position,
		color = click_instructions_txt_color
	)

	object_bin['click_anywhere_msg'] = visual.TextStim(
		window,
		text = 'Click anywhere to continue...',
		pos = continue_txt_position,
		color = continue_txt_color,
	)

	if randomize_presentation == True:
		random.shuffle(question_list)


	for question in question_list:

		object_bin['question'].setText(question)

		# initially draw stimulus and response buttons
		event_utils.draw_objects_in_bin(
			window,
			object_bin,
			object_list = ['question', 'response_scale'],
		)

		# wait some time
		if debug_mode == False: core.wait(.77)

		# draw click message
		object_bin['click_msg'].setText(click_instructions_txt)
		event_utils.draw_objects_in_bin(
			window,
			object_bin,
			object_list = ['question', 'response_scale', 'click_msg'],
		)

		# wait some time
		if debug_mode == False: core.wait(.35)

		# wait for user to click a response button
		cursor.clickReset()
		event.clearEvents()
		timer.reset()
		while object_bin['response_scale'].noResponse:
			if event.getKeys(keyList=quit_keys):
				print('user terminated')
				core.quit()
			event_utils.draw_objects_in_bin(window, object_bin,
				object_list = ['question', 'response_scale', 'click_msg']	
			)
		
		response = object_bin['response_scale'].getRating()
		rt = object_bin['response_scale'].getRT()
		object_bin['response_scale'].reset()

		event_utils.draw_objects_in_bin(
			window,
			object_bin,
			object_list = ['question', 'response_scale'],
		)

		if debug_mode == False: core.wait(1)

		# draw continue message
		event_utils.draw_objects_in_bin(
			window,
			object_bin,
			object_list = ['question', 'response_scale', 'click_anywhere_msg'],
		)

		if debug_mode == False: core.wait(.35)

		event_utils.wait_for_click_response(cursor, timer, quit_keys=quit_keys)

		event_utils.draw_objects_in_bin(
			window,
			object_bin,
			object_list = ['response_scale'],
		)

		if save_data == True:
			subject_data = [
				subject_info['id'],
				phase_id,
				subject_info['condition'],
				trial_num,
				question,
				response,
				rt,
			]

			with open(subject_info['datafile_path'], 'a') as file:
				csv_object = csv.writer(file)
				csv_object.writerow(subject_data)

		trial_num = trial_num + 1
