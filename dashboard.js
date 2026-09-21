// ==========================================
// DIGITAL JOURNAL PLATFORM
// dashboard.js
// ==========================================

// ---------- Welcome Greeting ----------

const heroTitle = document.querySelector(".hero h1");

const hour = new Date().getHours();

let greeting = "Welcome Back 👋";

if (hour < 12) {
    greeting = "Good Morning ☀️";
}
else if (hour < 17) {
    greeting = "Good Afternoon 🌤";
}
else {
    greeting = "Good Evening 🌙";
}

if (heroTitle) {
    heroTitle.textContent = greeting;
}

// ---------- Animated Statistics ----------

function animateCounter(id, target) {

    const element = document.getElementById(id);

    if (!element) return;

    let count = 0;

    const speed = Math.ceil(target / 60);

    const timer = setInterval(() => {

        count += speed;

        if (count >= target) {
            count = target;
            clearInterval(timer);
        }

        element.textContent = count;

    }, 25);

}

animateCounter("journalCount", 128);
animateCounter("streak", 24);

// ---------- Card Hover Animation ----------

const cards = document.querySelectorAll(".card, .action-card, .journal-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ---------- Mood Graph Animation ----------

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {

    const finalHeight = bar.style.height;

    bar.style.height = "0";

    setTimeout(() => {

        bar.style.transition = "height 1s ease";
        bar.style.height = finalHeight;

    }, index * 150);

});

// ---------- Fade-in Animation ----------

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .6s ease";

        document.body.style.opacity = "1";

    }, 100);

});

// ---------- Current Date ----------

const today = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

console.log(today.toLocaleDateString("en-US", options));

// ---------- Quick Action Click ----------

const actionCards = document.querySelectorAll(".action-card");

actionCards.forEach(card => {

    card.addEventListener("click", () => {

        console.log("Opening page...");

    });

});