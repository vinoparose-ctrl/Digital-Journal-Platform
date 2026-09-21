// =========================
// Export Page JavaScript
// =========================

// Fade-in Animation
window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".card, .stat-card, .backup-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.5s ease";

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);

    });

});

// Toast Function
function showToast(message) {

    const toast = document.getElementById("toast");

    toast.innerHTML = "✅ " + message;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2500);

}

// Export Buttons
document.getElementById("pdfBtn").addEventListener("click", () => {
    showToast("PDF Exported Successfully!");
});

document.getElementById("txtBtn").addEventListener("click", () => {
    showToast("TXT Exported Successfully!");
});

document.getElementById("docBtn").addEventListener("click", () => {
    showToast("DOCX Exported Successfully!");
});

// Backup Button
document.getElementById("backupBtn").addEventListener("click", () => {
    showToast("Backup Download Started!");
});

// Restore Button
document.getElementById("restoreBtn").addEventListener("click", () => {

    const file = document.getElementById("restoreFile");

    if (file.files.length === 0) {
        alert("Please choose a backup file first.");
    } else {
        showToast("Backup Restored Successfully!");
    }

});

// Button Click Animation
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);

    });

});

// File Name Preview
const restoreFile = document.getElementById("restoreFile");

restoreFile.addEventListener("change", function () {

    if (this.files.length > 0) {
        showToast(this.files[0].name + " Selected");
    }

});
const homeBtn = document.querySelector(".back-home-btn");

homeBtn.addEventListener("mouseenter", () => {
    homeBtn.style.letterSpacing = "1px";
});

homeBtn.addEventListener("mouseleave", () => {
    homeBtn.style.letterSpacing = "0";
});

homeBtn.addEventListener("click", function(e){
    e.preventDefault();

    this.innerHTML = "🏡 Returning Home...";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 600);
});