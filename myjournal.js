// ======================================
// DIGITAL JOURNAL PLATFORM
// MY JOURNAL JAVASCRIPT
// ======================================

// ---------- Search Journals ----------

const searchInput = document.getElementById("searchInput");
const journalCards = document.querySelectorAll(".journal-card");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    journalCards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// ---------- Mood Filter ----------

const moodFilter = document.getElementById("moodFilter");

moodFilter.addEventListener("change", function () {

    const selected = this.value.toLowerCase();

    journalCards.forEach(card => {

        if (selected === "all moods" || selected === "all") {
            card.style.display = "block";
            return;
        }

        const mood = card.querySelector(".mood").textContent.toLowerCase();

        if (mood.includes(selected.replace(/[^a-z]/g, ""))) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// ---------- Delete Journal ----------

const deleteButtons = document.querySelectorAll(".delete");

deleteButtons.forEach(button => {

    button.addEventListener("click", function () {

        const answer = confirm("Are you sure you want to delete this journal?");

        if (answer) {

            this.closest(".journal-card").remove();

            alert("Journal deleted successfully.");

        }

    });

});

// ---------- Read Button ----------

const readButtons = document.querySelectorAll(".read");

readButtons.forEach(button => {

    button.addEventListener("click", function () {

        const title = this.closest(".journal-card").querySelector("h2").textContent;

        alert("Opening: " + title);

    });

});

// ---------- Edit Button ----------

const editButtons = document.querySelectorAll(".edit");

editButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert("Redirecting to Edit Journal page...");

        // Example:
        // window.location.href = "journal.html";

    });

});

// ---------- Hover Animation ----------

journalCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";
        card.style.transition = ".3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// ---------- Welcome Message ----------

window.onload = function () {

    console.log("Welcome to My Journals!");

};