import $ from 'jquery';

const GENRES = ["Pop", "Rock", "Electronic", "K-Pop", "Hip-hop", "Classical", "Indie", "Folk", "Country", "Jazz", "Soul", "Punk"];
const PALETTES = [
	{name: "Lorem", colors: ["#D0524D", "#F8F2D9", "#96AF98", "#547A67", "383F41"]},
	{name: "Ipsum", colors: ["#123232", "#D0C199", "#D9B28B", "#6B3224", "1B1A16"]},
	{name: "Dolor", colors: ["#B7352E", "#F5D6AC", "#D89F6C", "#7D605F", "41142C"]},
];
const OCCUPATIONS = [
	["Big Boss", "Social Media Intern"], 
	["Kit Assembler", "Teacher"], 
	["Coffee Brewer", "Saikang Warrior", "Slacker", "Mascot", "Office Pet"]
];

// generate palettes
let palette_list = $(".palette-list");
for (let i = 0; i < PALETTES.length; i++) {
	let palette = PALETTES[i];
	let palette_element = $("<div class='palette'/>");
	palette_element.append($("<div class='palette-title'/>").text(palette.name));
	let palette_color_element = $("<div class='palette-colors'/>");
	for (let j = 0; j < palette.colors.length; j++) {
		palette_color_element.append($("<div class='palette-color'/>").css('background-color', palette.colors[j]));
	}
	palette_element.append(palette_color_element);
	palette_element.on('click', function () {
		$(".palette-list .selected").removeClass("selected");
		$(this).addClass("selected");
	});
	palette_list.append(palette_element);
}

// generate music genres

let genre_list = $(".music-list");
for (let i = 0; i < GENRES.length; i++) {
	let genre_element = $("<div class='genre'/>");
	genre_element.text(GENRES[i]);

	genre_element.on('click', function () {
		$(".music-list .selected").removeClass("selected");
		$(this).addClass("selected");
	});

	genre_list.append(genre_element);
}

// generate occupations list
var occupation_classes = [".occupation-first", ".occupation-second", ".occupation-third"];
for (let i = 0; i < occupation_classes.length; i++) {
	let occupation_list_element = $(occupation_classes[i]).find(".occupation-list");
	for (let j = 0; j < OCCUPATIONS[i].length; j++) {
		let occupation_element = $("<span class='occupation'/>");
		occupation_element.text(OCCUPATIONS[i][j]);

		occupation_element.on('click', function () {
			$(".occupations").find(".selected").removeClass("selected");
			$(this).addClass("selected");
		});

		occupation_list_element.append(occupation_element);
	}
}

// generate toto card

var toto_number_box = $(".toto-number-box");
for (let i = 1; i <= 49; i++) {
	var toto_element = $("<div class='toto-number'/>");
	toto_element.text(i);
	toto_element.data('number', i);

	toto_element.on('click', function () {
		$(this).toggleClass("selected");
	});

	if (i % 9 !== 0) {
		toto_element.addClass("not-edge");
	}
	
	toto_number_box.append(toto_element);
}