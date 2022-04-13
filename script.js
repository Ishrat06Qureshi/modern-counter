const counterBoxes = document.querySelectorAll('.counter_box_container');
const todayDate = (TODAY_DATE = new Date());
const auctionDate = (AUCTION_DATE = new Date('19 april, 2022'));

console.log(getDifferenceInDays());
console.log(getDifferenceInHours());
console.log(getDifferenceInMinutes());
console.log(getDifferenceInSeconds());

function getDifferenceInDays(
	todayDate = TODAY_DATE,
	auctionDate = AUCTION_DATE
) {
	console.log(todayDate, auctionDate);
	const diffInMs = Math.abs(auctionDate - todayDate);
	return Math.round(diffInMs / (1000 * 60 * 60 * 24));
}

function getDifferenceInHours(
	todayDate = TODAY_DATE,
	auctionDate = AUCTION_DATE
) {
	const diffInMs = Math.abs(auctionDate - todayDate);
	return Math.round(diffInMs / (1000 * 60 * 60));
}

function getDifferenceInMinutes(
	todayDate = TODAY_DATE,
	auctionDate = AUCTION_DATE
) {
	const diffInMs = Math.abs(auctionDate - todayDate);
	return Math.round(diffInMs / (1000 * 60));
}

function getDifferenceInSeconds(
	todayDate = TODAY_DATE,
	auctionDate = AUCTION_DATE
) {
	const diffInMs = Math.abs(auctionDate - todayDate);
	return Math.round(diffInMs / 1000);
}

counterBoxes.forEach((counterBox) => {
	counterBox.innerHTML = 0;
});
