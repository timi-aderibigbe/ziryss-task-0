// set the scripting for timer updates
function updateTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    const currentTime = Date.now();

    if (timeElement) {
        timeElement.textContent = currentTime;
    }
}

updateTime();

setInterval(updateTime, 1000);
