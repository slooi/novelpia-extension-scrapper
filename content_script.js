// content_script.js
let dataToSend = 1; // Store the data to be sent

// Function to set the data to be sent when the popup opens
function setDataToSend(data) {
	dataToSend = data;
}

// Listen for the message from popup.js
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.greeting === "Popup opened!") {
		sendResponse({
			title: getTextContent(".menu-title-wrapper"),
			text: getTextContent("#novel_drawing"),
			html: document.body.innerHTML
		});
	}
});

function getTextContent(selector) {
	const elements = document.querySelectorAll(selector);
	if (elements && elements.length > 0) {
		const element = elements[0];
		return element.textContent;
	}
	return "N/A";
}
