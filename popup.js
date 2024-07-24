document.addEventListener("DOMContentLoaded", () => {
  const timeInput = document.getElementById("timeInput");
  if (timeInput) {
    timeInput.focus();
  }

  const jumpButton = document.getElementById("jumpButton");
  jumpButton.addEventListener("click", () => {
    const timeInputValue = timeInput.value;
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          action: "jumpToTime",
          timeInput: timeInputValue,
        },
        response => {
          if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError.message);
          }
        }
      );
    });
  });

  timeInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      jumpButton.click();
    }
  });
});
