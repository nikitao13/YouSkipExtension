chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "promptTime") {
    const timeInput = prompt("Enter time (e.g., 2m40s):");
    if (timeInput) {
      const seconds = parseTimeInput(timeInput);
      if (seconds !== null) {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("t", seconds + "s");
        window.location.href = currentUrl.toString();
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
