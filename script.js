const AUCTION_DATE = new Date('14 april, 2022');
const MILLI_SECONDS_IN_DAY = 1000 * 60 * 60 * 24; //86400000
const MILLI_SECONDS_IN_AN_HOUR = 1000 * 60 * 60; //3600000
const MILLI_SECONDS_IN_A_MINUTE = 1000 * 60; //60000
const MILLI_SECONDS_IN_A_SECOND = 1000;
const INTERVAL = 1000; // miliseconds in one seconds

const counterUpdate = () => {
	const TODAY_DATE = new Date();
	const daysLeft = getDifferenceInDays(TODAY_DATE);
	const hoursLeft = getDifferenceInHours(TODAY_DATE);
	const minutesLeft = getDifferenceInMinutes(TODAY_DATE);
	const secondsLeft = getDifferenceInSeconds(TODAY_DATE);
	const dayDiv = document.getElementById('days');
	const minutesDiv = document.getElementById('hours');
	const hoursDiv = document.getElementById('minutes');
	const secondsDiv = document.getElementById('seconds');
	dayDiv.innerHTML = daysLeft;
	hoursDiv.innerHTML = hoursLeft;
	minutesDiv.innerHTML = minutesLeft;
	secondsDiv.innerHTML = secondsLeft;
};

function getDifferenceInDays(
	todayDate = TODAY_DATE,
	auctionDate = AUCTION_DATE
) {
	const diffInMs = Math.abs(auctionDate - todayDate);
	return Math.round(diffInMs / MILLI_SECONDS_IN_DAY);
}

function getDifferenceInHours(
	todayDate = TODAY_DATE,
	auctionDate = AUCTION_DATE
) {
	const diffInMs = Math.abs(auctionDate - todayDate);
	return Math.round(diffInMs / MILLI_SECONDS_IN_AN_HOUR);
}

function getDifferenceInMinutes(
	todayDate = TODAY_DATE,
	auctionDate = AUCTION_DATE
) {
	const diffInMs = Math.abs(auctionDate - todayDate);
	return Math.round(diffInMs / MILLI_SECONDS_IN_A_MINUTE);
}

function getDifferenceInSeconds(
	todayDate = TODAY_DATE,
	auctionDate = AUCTION_DATE
) {
	const diffInMs = Math.abs(auctionDate - todayDate);
	console.log('diffInMs', diffInMs);
	return Math.round(diffInMs / MILLI_SECONDS_IN_A_SECOND);
}

counterUpdate();
setInterval(counterUpdate, INTERVAL);
