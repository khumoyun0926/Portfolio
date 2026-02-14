document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById('service-toggle');
    const toggleIcon = document.getElementById('toggle-icon');
    const statusText = document.getElementById('status-text');
    const profileImg = document.getElementById('profile-img');

    let isRunning = true;

    toggleBtn.addEventListener('click', () => {
        isRunning = !isRunning;

        if (isRunning) {
            // YONIQ HOLAT
            statusText.innerText = "Service: Running";
            statusText.style.color = "#2ecc71";
            profileImg.style.border = "6px solid #2ecc71";
            toggleBtn.classList.remove('off');
            toggleIcon.className = "fas fa-power-off";
        } else {
            // O'CHIK HOLAT
            statusText.innerText = "Service: Stopped";
            statusText.style.color = "#e74c3c";
            profileImg.style.border = "6px solid #e74c3c";
            toggleBtn.classList.add('off');
            toggleIcon.className = "fas fa-play";
        }
    });
});
