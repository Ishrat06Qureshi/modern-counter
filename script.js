const AUCTION_DATE = new Date('1 jan,2023');


const SECONDS_IN_AN_HOUR = 60 * 60; //3600
const MILLI_SECONDS_IN_A_SECOND = 1000;
const HOURS_IN_A_DAY = 24;
const SECONDS_IN_A_MINUTE = 60;
const INTERVAL = 1000; // miliseconds in one seconds

const counterUpdate = () => {
	const TODAY_DATE = new Date();
	const TOTAL_SECONDS = Math.floor(AUCTION_DATE - TODAY_DATE) / 1000;
	const daysLeft = getDifferenceInDays(TOTAL_SECONDS);
	const hoursLeft = getDifferenceInHours(TOTAL_SECONDS);
	const minutesLeft = getDifferenceInMinutes(TOTAL_SECONDS);
	const secondsLeft = getDifferenceInSeconds(TOTAL_SECONDS);
	
	const dayDiv = document.getElementById('days');
	const minutesDiv = document.getElementById('minutes');
	const hoursDiv = document.getElementById('hours');

	const secondsDiv = document.getElementById('seconds');
	dayDiv.innerHTML = daysLeft;
	hoursDiv.innerHTML = hoursLeft;
	minutesDiv.innerHTML = minutesLeft;
	secondsDiv.innerHTML = secondsLeft;
};

function getDifferenceInDays(dateDifference) {
	return Math.floor(dateDifference / MILLI_SECONDS_IN_AN_HOUR / HOURS_IN_A_DAY);
}

function getDifferenceInHours(dateDifference) {
	return Math.floor(dateDifference / SECONDS_IN_AN_HOUR) % HOURS_IN_A_DAY;
}

function getDifferenceInMinutes(dateDifference) {

	return Math.floor(dateDifference / SECONDS_IN_A_MINUTE) % SECONDS_IN_A_MINUTE;
}

function getDifferenceInSeconds(dateDifference) {
	return Math.floor(dateDifference) % SECONDS_IN_A_MINUTE;
}

counterUpdate();
setInterval(counterUpdate, INTERVAL);
