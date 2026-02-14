document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById('service-toggle');
    const statusText = document.getElementById('status-text');
    const profileImg = document.getElementById('profile-img');

    let isRunning = true;

    toggleBtn.addEventListener('click', () => {
        isRunning = !isRunning;

        if (isRunning) {
            // Servis YONGANDA
            statusText.innerText = "Service: Running";
            statusText.style.color = "#2ecc71";
            profileImg.style.border = "5px solid #2ecc71";
            toggleBtn.classList.remove('off');
            toggleBtn.innerHTML = 'ON'; // Yoki xohlagan ikonkangiz
        } else {
            // Servis O'CHGANDA
            statusText.innerText = "Service: Stopped";
            statusText.style.color = "#e74c3c";
            profileImg.style.border = "5px solid #e74c3c";
            toggleBtn.classList.add('off');
            toggleBtn.innerHTML = 'OFF';
        }
        
        console.log("Service status:", isRunning ? "Active" : "Inactive");
    });
});
