// ===============================
// DIGITAL JOURNAL PLATFORM
// journal.js
// ===============================

// Automatically set today's date
const dateInput = document.getElementById("journalDate");

if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;
}

// Character Counter
const journalText = document.getElementById("journalText");
const count = document.getElementById("count");

if (journalText && count) {
    journalText.addEventListener("input", function () {
        count.textContent = this.value.length;
    });
}

// Form Validation
const form = document.getElementById("journalForm");

if (form) {
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const title = document.getElementById("title").value.trim();
        const mood = document.getElementById("mood").value;
        const text = journalText.value.trim();

        if (title === "" || mood === "" || text === "") {
            alert("Please fill in all required fields.");
            return;
        }

        alert("🎉 Journal published successfully!");

        form.reset();

        count.textContent = "0";

        dateInput.value = new Date().toISOString().split("T")[0];

    });
}

// Save Draft Button
const draftBtn = document.querySelector(".draft-btn");

if (draftBtn) {
    draftBtn.addEventListener("click", function () {

        alert("Draft saved successfully!");

    });
}

// Clear Button
const clearBtn = document.querySelector(".clear-btn");

if (clearBtn) {
    clearBtn.addEventListener("click", function () {

        setTimeout(() => {
            count.textContent = "0";
            dateInput.value = new Date().toISOString().split("T")[0];
        }, 100);

    });
}

// Image Upload Preview
const imageInput = document.getElementById("journalImage");

if (imageInput) {

    imageInput.addEventListener("change", function () {

        if (this.files.length > 0) {

            alert("Image selected: " + this.files[0].name);

        }

    });

}

// Welcome Animation
window.addEventListener("load", function () {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 0.6s ease";
        document.body.style.opacity = "1";

    }, 100);

});