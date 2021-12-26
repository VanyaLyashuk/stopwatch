'use strict';

const startBtn = document.querySelector('.stopwatch__start');
const stopBtn  = document.querySelector('.stopwatch__stop');
const resetBtn = document.querySelector('.stopwatch__reset');

let hours = document.querySelector('.stopwatch__hours');
let minutes = document.querySelector('.stopwatch__minutes');
let seconds = document.querySelector('.stopwatch__seconds');
let milliseconds = document.querySelector('.stopwatch__milliseconds');

let hoursFirstNum = 0
	, hoursLastNum = 0
	, minFirstNum  = 0
	, minLastNum   = 0
	, secFirstNum  = 0
	, secLastNum   = 0
	, millFirstNum = 0
	, millLastNum  = 0;

let refreshIntervalId;

function startTimer() {

	if (millLastNum <= 9) {
		milliseconds.innerHTML = `${millFirstNum}${millLastNum}`;
		millLastNum++;
	} else if (millLastNum > 9){
		millLastNum = 0;
		
		++millFirstNum;
		milliseconds.innerHTML = `${millFirstNum}${millLastNum}`;
	}

	if (millFirstNum == 9 && millLastNum == 9) {
		millFirstNum = 0;
		millLastNum  = 0;
		milliseconds.innerHTML = `00`;

		++secLastNum;
		seconds.innerHTML = `${secFirstNum}${secLastNum}`;
	} else if (secLastNum > 9) {
		secLastNum = 0;

		++secFirstNum;
		seconds.innerHTML = `${secFirstNum}${secLastNum}`;
	} else if (secFirstNum == 6) {
		secLastNum = 0;

		seconds.innerHTML = `${secFirstNum}${secLastNum}`;
	}

	if (secFirstNum == 6 && secLastNum == 0) {
		secFirstNum = 0;
		secLastNum  = 0;
		seconds.innerHTML = '00';

		++minLastNum;
		minutes.innerHTML = `${minFirstNum}${minLastNum}`;
	} else if (minLastNum > 9) {
		minLastNum = 0;

		++minFirstNum;
		minutes.innerHTML = `${minFirstNum}${minLastNum}`;
	}else if (minFirstNum == 6) {
		minLastNum = 0;

		minutes.innerHTML = `${minFirstNum}${minLastNum}`;
	}

	if (minFirstNum == 6 && minLastNum == 0) {
		minFirstNum = 0;
		minLastNum  = 0;
		secFirstNum = 0;
		secLastNum  = 0;
		seconds.innerHTML = '00';
		minutes.innerHTML = '00';

		++hoursLastNum;
		hours.innerHTML = `${hoursFirstNum}${hoursLastNum}`;
	} else if (hoursLastNum > 9) {
		hoursLastNum = 0;

		++hoursFirstNum;
		hours.innerHTML = `${hoursFirstNum}${hoursLastNum}`;
	}

}

startBtn.addEventListener('click', function () {
	clearInterval(refreshIntervalId);
	refreshIntervalId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function(){
	clearInterval(refreshIntervalId);
});

resetBtn.addEventListener('click', function(){
	clearInterval(refreshIntervalId);

	hoursFirstNum = 0;
	hoursLastNum = 0;
	minFirstNum = 0;
	minLastNum = 0;
	secFirstNum = 0;
	secLastNum = 0;
	millFirstNum = 0;
	millLastNum = 0;

	hours.innerHTML = `${hoursFirstNum}${hoursLastNum}`;
	minutes.innerHTML = `${minFirstNum}${minLastNum}`;
	seconds.innerHTML = `${secFirstNum}${secLastNum}`;
	milliseconds.innerHTML = `${millFirstNum}${millLastNum}`;
});