document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('service-toggle');
    const img = document.getElementById('profile-img');
    const txt = document.getElementById('status-text');
    const ico = document.getElementById('toggle-icon');

    let isRunning = true;

    if (btn) {
        btn.addEventListener('click', () => {
            isRunning = !isRunning;
            if (isRunning) {
                if(txt) txt.innerText = "Service: Running";
                if(txt) txt.style.color = "#2ecc71";
                if(img) img.style.border = "6px solid #2ecc71";
                btn.classList.remove('off');
                ico.className = "fas fa-power-off";
            } else {
                if(txt) txt.innerText = "Service: Stopped";
                if(txt) txt.style.color = "#e74c3c";
                if(img) img.style.border = "6px solid #e74c3c";
                btn.classList.add('off');
                ico.className = "fas fa-play";
            }
        });
    }
});
