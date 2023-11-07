chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const tab = tabs[0];
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: (text) => {
      document.getElementById("sentText").textContent = text;
    },
  });
});
