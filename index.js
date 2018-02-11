'use strict';
const robot = require('robotjs');
const ioHook = require('iohook');

let allowInput = true;

let keycodes = [
	16, // q
	17, // w
	18, // e
	19, // r
	20, // t
	21, // y
	22, // u
	23, // i
	24, // o
	25, // p
	26, // å

	30, // a
	31, // s
	32, // d
	33, // f
	34, // g
	35, // h
	36, // j
	37, // k
	38, // l
	39, // ö
	40, // ä

	44, // z
	45, // x
	46, // c
	47, // v
	48, // b
	49, // n
	50, // m
]

let keys = [
	'q',
	'w',
	'r',
	't',
	'y',
	'u',
	'i',
	'o',
	'p',
	'å',

	'a',
	's',
	'd',
	'f',
	'g',
	'h',
	'j',
	'k',
	'l',
	'ö',
	'ä',

	'z',
	'x',
	'c',
	'v',
	'b',
	'n',
	'm',
]

// keycodes = shuffle(keycodes);

ioHook.on('keydown', event => {
	if (allowInput){
		const keycode = event.keycode;
		const index = keycodes.indexOf(event.keycode);
		if (index > 0){
			console.log(index,keycode);
			triggerKey(keys[index]);
		}
	}
});
 
ioHook.start();

function triggerKey(key){
	try {
		robot.keyTap('backspace');
		robot.keyTap(key);
		allowInput = false;
		setTimeout(() => {
			allowInput = true;
		},20);
	} catch(err) {
		console.error(err);
	}
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}