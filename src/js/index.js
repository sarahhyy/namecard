import '../index.scss';

import $ from 'jquery';
import anime from 'animejs';

import './generate.js';

var section_ids = ["intro", "single-word", "color-palette", "music-genre", "occupation", "toto", "end", "instructions"];
var cur_section = 0;

// start
var MESSAGE_DELAYS = [
	["message-1", 1000],
	["message-2", 2500],
	["message-3", 4000],
	["message-4", 5500],
	["message-5", 7000]
]

var message_pop = function (message_id, delay) {
	var delay = delay || 0;
	$("#" + message_id).show();
	anime({
		targets: '#' + message_id,
		delay: delay,
		translateY: [50, 0],
		opacity: [0, 1],
		easing: 'easeInOutQuad'
	});
}

for (let i = 0; i < MESSAGE_DELAYS.length; i++) {
	message_pop(MESSAGE_DELAYS[i][0], MESSAGE_DELAYS[i][1]);
}

var showed_response = false;

$("#message-5 input").on('input', function () {
	if ($(this).value === "") return;
	if (showed_response) return;
	message_pop("message-6", 1000);
	message_pop("message-7", 2000);
	showed_response = true;
});

var next_section_transition = function (section_number) {
	var section_element = $("#" + section_ids[section_number]);
	section_element.show();
	anime({
		targets: section_element[0],
		height: [0, "100%"],
		easing: 'easeInOutQuad'
	});

	cur_section = section_number;
	if (section_number === 6) {
		let name = $("#name-input").val();
		let single_word = $(".single-word-input input").val();
	}
};

var previous_section_transition = function (section_number) {
	if (section_number >= 6) return;
	let section_element = $("#" + section_ids[section_number + 1]);
	anime({
		targets: section_element[0],
		height: ["100%", 0],
		easing: 'easeInOutQuad',
		complete: function () {
			section_element.hide();
		}
	});

	cur_section = section_number;
}

var next_section = function () {
	if (cur_section >= 7) return;
	if (cur_section === 0 && $("#name-input").val() === "") return;
	if (cur_section === 1 && $(".single-word-input input").val() === "") return;
	if (cur_section === 2 && $(".palette.selected").length === 0) return;
	if (cur_section === 3 && $(".genre.selected").length === 0) return;
	if (cur_section === 4 && $(".occupation.selected").length === 0) return;
	if (cur_section === 5 && $(".toto-number.selected").length !== 6) return;
	next_section_transition(cur_section + 1);
};

var previous_section = function () {
	if (cur_section == 0) return;
	previous_section_transition(cur_section - 1)
}

$("#down-button").on('click', function () {
	next_section();
});

$("#up-button").on('click', function () {
	previous_section();
});

