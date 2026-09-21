new Chart(document.getElementById("pieChart"), {
    type: "doughnut",
    data: {
        labels: ["Happy", "Calm", "Neutral", "Sad", "Angry"],
        datasets: [{
            data: [35, 25, 20, 15, 5],
            backgroundColor: [
                "#6d4ae6",
                "#9b7cf8",
                "#b79cff",
                "#f7b731",
                "#ff5c5c"
            ],
            cutout: "55%"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        plugins: {
            legend: {
                position: "top"
            }
        }
    }
});
