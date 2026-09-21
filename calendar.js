// ================================
// Calendar Page - JavaScript
// ================================

// Fade-in Animation
window.addEventListener("load", () => {

    const items = document.querySelectorAll(".sidebar, .main, .panel, .card, .date");

    items.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "all .5s ease";

        setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 40);
    });

});

// Highlight Selected Date
const dates = document.querySelectorAll(".date");

dates.forEach(date => {

    date.addEventListener("click", () => {

        dates.forEach(d => d.classList.remove("selected"));

        date.classList.add("selected");

    });

});

// New Entry Button
const newEntryBtn = document.querySelector(".btn");

if (newEntryBtn) {

    newEntryBtn.addEventListener("click", () => {

        alert("Redirecting to the Journal Entry page...");

        // Uncomment this after creating your journal page
        // window.location.href = "journal.html";

    });

}

// Menu Active Effect
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", function () {

        menuLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

// Today's Date Message
const heading = document.querySelector(".top h2");

if (heading) {

    const today = new Date();

    const options = {
        month: "long",
        year: "numeric"
    };

    heading.innerHTML = today.toLocaleDateString("en-US", options);

}

// Smooth Hover Effect
dates.forEach(date => {

    date.addEventListener("mouseenter", () => {

        date.style.transform = "scale(1.05)";

    });

    date.addEventListener("mouseleave", () => {

        date.style.transform = "scale(1)";

    });

});