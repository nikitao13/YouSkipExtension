chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "jumpToTime") {
    const { timeInput } = request;
    if (timeInput) {
      const seconds = parseTimeInput(timeInput);
      if (seconds !== null) {
        const video = document.querySelector("video");
        if (video) {
          video.currentTime = seconds;
        } else {
          alert("YouTube player not found or unsupported.");
        }
      } else {
        alert("Invalid time format. Please use the format 1h2m3s.");
      }
    }
  }
});

function parseTimeInput(input) {
  const match = input.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (match) {
    const hours = parseInt(match[1] || "0");
    const minutes = parseInt(match[2] || "0");
    const seconds = parseInt(match[3] || "0");
    return hours * 3600 + minutes * 60 + seconds;
  }
  return null;
}
