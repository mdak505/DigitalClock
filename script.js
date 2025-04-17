function updateTime() {
    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');
    const now = new Date();

    // Format time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Format date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);

    // Update DOM elements
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Update clock immediately and then every second
updateTime();
setInterval(updateTime, 1000);