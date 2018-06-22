function moveHands() {
	with(new Date()) {
		h = 30 * (getHours() % 12 + getMinutes() / 60); //30 degrees an hour
		m = 6 * getMinutes(); // 6 degrees a minute
		s = 6 * getSeconds(); // 6 degrees a second
		// Setting the rotates CSS attribute to those degree value
		document.getElementById('seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);";
		document.getElementById('minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
		document.getElementById('hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";
		setTimeout(moveHands, 1000); // Calling this function every second
	}
}

window.onload = moveHands; //Making sure the function starts on load of webpae