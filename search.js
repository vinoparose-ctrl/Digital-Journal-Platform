// ==============================
// Search Memories Page
// ==============================

// Fade-in Animation
window.addEventListener("load", () => {

    const elements = document.querySelectorAll(".banner, .search-box, .tag, .card");

    elements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "all .5s ease";

        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, index * 100);

    });

});

// ==============================
// Search Function
// ==============================

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchBtn");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("noResults");

function searchMemories() {

    const value = searchInput.value.toLowerCase().trim();

    let found = false;

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "block";
            found = true;

        } else {

            card.style.display = "none";

        }

    });

    if (found) {

        noResults.style.display = "none";

    } else {

        noResults.style.display = "block";

    }

}

// Search Button
searchButton.addEventListener("click", searchMemories);

// Press Enter
searchInput.addEventListener("keyup", function (event) {

    if (event.key === "Enter") {

        searchMemories();

    }

});

// ==============================
// Tag Filter
// ==============================

const tags = document.querySelectorAll(".tag");

tags.forEach(tag => {

    tag.addEventListener("click", () => {

        searchInput.value = tag.innerText;

        searchMemories();

    });

});

// ==============================
// Card Hover Effect
// ==============================

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ==============================
// Welcome Message
// ==============================

console.log("Search Memories page loaded successfully!");