// background.js

chrome.contextMenus.create({
  id: "sendToExtension",
  title: "Send to extension",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "sendToExtension") {
    const selectedText = info.selectionText;
    if (selectedText) {
      sendTextToAPI(selectedText);
    }
  }
});

function sendTextToAPI(text) {
  const apiUrl = "http://127.0.0.1:5000/send";
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Text sent to the extension's API:", data);
    })
    .catch((error) => {
      console.error("Error sending text to API:", error);
    });
}
