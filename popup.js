// popup.js
const PROMPT = `You are an expert Korean translator with more than 50 years of experience translating from Korean to English. Translate the below. If you translate it well, i will tip you 1000 USD. `;

const outputDiv = document.getElementById("output");

function displayData(data) {
	document.body.innerText = data;
}

// Send message to get data when the popup opens
window.onload = function () {
	browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
		browser.tabs
			.sendMessage(tabs[0].id, { greeting: "Popup opened!" })
			.then((response) => {
				if (response) {
					console.log("response", response);
					displayData(`
                        ${PROMPT}

                        ${response.title}                        

                        ${response.text
							.split("\n")
							.map((line) => line.trim())
							.join("\n")}
                        `);
				}
			})
			.catch((error) => {
				console.error("Error sending message:", error);
			});
	});
};
