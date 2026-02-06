const cards = document.querySelectorAll('.tip-card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50) {
            card.classList.add('show');
        }
    });
});

function calculateFootprint() {
    let electricityValue = parseFloat(document.getElementById("electricity").value) || 0;
    let electricityUnit = document.getElementById("electricityUnit").value;

    let electricityKwhPerDay = 0;

    if (electricityUnit === "monthly") {
        electricityKwhPerDay = electricityValue / 30;
    } else {
        electricityKwhPerDay = electricityValue;
    }

    let electricityCO2 = electricityKwhPerDay * 0.82;

    let applianceHours = parseFloat(document.getElementById("applianceHours").value) || 0;

    let applianceKwh = applianceHours * 1.5;
    let applianceCO2 = applianceKwh * 0.82;

    let distanceValue = parseFloat(document.getElementById("distance").value) || 0;
    let distanceUnit = document.getElementById("distanceUnit").value;
    let vehicleType = document.getElementById("vehicleType").value;

    let distanceKm = distanceUnit === "miles"
        ? distanceValue * 1.609
        : distanceValue;

    let emissionFactor = 0;

    if (vehicleType === "petrol") emissionFactor = 0.192;
    else if (vehicleType === "diesel") emissionFactor = 0.171;
    else if (vehicleType === "electric") emissionFactor = 0.05;
    else if (vehicleType === "public") emissionFactor = 0.08;

    let transportCO2 = distanceKm * emissionFactor;
    
    let dietType = document.getElementById("diet").value;
    let dietCO2 = 0;

    if (dietType === "Vegetarian") dietCO2 = 2.0;
    else if (dietType === "Mixed Diet") dietCO2 = 3.3;
    else if (dietType === "Non-Vegetarian") dietCO2 = 5.0;
    else if (dietType === "Vegan") dietCO2 = 1.5;
    
    let totalCO2 = electricityCO2 + applianceCO2 + transportCO2 + dietCO2;

}

//let impactChart;

/*function updateChart(e, t, a, d) {
    const ctx = document.getElementById("impactChart");

    if (!ctx) return;

    if (impactChart) {
        impactChart.destroy();
    }

    impactChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Electricity", "Transport", "Appliances", "Diet"],
            datasets: [{
                data: [e, t, a, d],
                borderWidth: 1
            }]
        }
    });
}*/
/*
<button class="back-btn" onclick="window.history.back()">
    ← Back to Assessment
</button>*/
