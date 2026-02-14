document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById('service-toggle');
    const toggleIcon = document.getElementById('toggle-icon');
    const statusText = document.getElementById('status-text');
    const profileImg = document.getElementById('profile-img');

    // Boshlang'ich holat
    let isRunning = true;

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isRunning = !isRunning;

            if (isRunning) {
                // ACTIVE HOLATI
                statusText.innerText = "Service: Running";
                statusText.style.color = "#2ecc71";
                profileImg.style.border = "6px solid #2ecc71";
                toggleBtn.classList.remove('off');
                toggleIcon.className = "fas fa-power-off";
                console.log("Service status: Running");
            } else {
                // STOPPED HOLATI
                statusText.innerText = "Service: Stopped";
                statusText.style.color = "#e74c3c";
                profileImg.style.border = "6px solid #e74c3c";
                toggleBtn.classList.add('off');
                toggleIcon.className = "fas fa-play";
                console.log("Service status: Stopped");
            }
        });
    }
});
