// ==============================
// Digital Journal Platform
// Profile Page JavaScript
// ==============================

// Fade-in animation
window.addEventListener("load", () => {

    document.querySelectorAll(".profile-card, .card").forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease";

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);

    });

});

// ==============================
// Profile Image Preview
// ==============================

const uploadImage = document.getElementById("uploadImage");

if (uploadImage) {

    uploadImage.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {

            document.getElementById("previewImage").src =
                URL.createObjectURL(file);

        }

    });

}

// ==============================
// Save Profile
// ==============================

const forms = document.querySelectorAll("form");

if (forms.length > 0) {

    forms[0].addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Profile updated successfully!");

    });

}

// ==============================
// Change Password
// ==============================

if (forms.length > 1) {

    forms[1].addEventListener("submit", function (e) {

        e.preventDefault();

        const password =
            document.querySelectorAll("input[type='password']");

        if (password[1].value !== password[2].value) {

            alert("❌ New passwords do not match.");

            return;

        }

        alert("🔒 Password updated successfully!");

        this.reset();

    });

}

// ==============================
// Logout Button
// ==============================

const logoutBtn = document.querySelector(".logout-btn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        if (confirm("Are you sure you want to logout?")) {

            window.location.href = "index.html";

        }

    });

}

// ==============================
// Preferences
// ==============================

document.querySelectorAll(".preference-item input").forEach(toggle => {

    toggle.addEventListener("change", () => {

        alert("⚙️ Preference updated!");

    });

});
const name = localStorage.getItem("userName");
document.getElementById("userName").textContent = name;