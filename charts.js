// ==========================
// Weekly Mood Chart
// ==========================

const weeklyChart = document.getElementById("weeklyChart");

if (weeklyChart) {

    new Chart(weeklyChart, {

        type: "bar",

        data: {

            labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

            datasets: [{

                label: "Mood Score",

                data: [7,8,6,9,8,10,9],

                backgroundColor: [

                    "#5a4fcf",
                    "#8b7cff",
                    "#6f63ff",
                    "#a18cff",
                    "#5a4fcf",
                    "#8b7cff",
                    "#6f63ff"

                ],

                borderRadius: 10

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    max: 10

                }

            }

        }

    });

}

// ==========================
// Monthly Mood Chart
// ==========================

const monthlyChart = document.getElementById("monthlyChart");

if (monthlyChart) {

    new Chart(monthlyChart, {

        type: "line",

        data: {

            labels: ["Week 1","Week 2","Week 3","Week 4"],

            datasets: [{

                label: "Average Mood",

                data: [6.8,7.5,8.2,8.9],

                borderColor: "#5a4fcf",

                backgroundColor: "rgba(90,79,207,0.2)",

                fill: true,

                tension: 0.4,

                pointRadius: 5,

                pointBackgroundColor: "#5a4fcf"

            }]

        },

        options: {

            responsive: true

        }

    });

}

// ==========================
// Mood Distribution
// ==========================

const pieChart = document.getElementById("pieChart");

if (pieChart) {

    new Chart(pieChart, {

        type: "doughnut",

        data: {

            labels: [

                "Happy",

                "Calm",

                "Neutral",

                "Sad",

                "Angry"

            ],

            datasets: [{

                data: [40,25,20,10,5],

                backgroundColor: [

                    "#5a4fcf",

                    "#8b7cff",

                    "#6f63ff",

                    "#fbbf24",

                    "#ef4444"

                ]

            }]

        },

        options: {

            responsive: true

        }

    });

}