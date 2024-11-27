document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBMI();
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('bmiForm').reset();
    document.getElementById('bmiResult').textContent = '--';
    document.getElementById('bmiMessage').textContent = '--';
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        const roundedBMI = bmi.toFixed(2);
        document.getElementById('bmiResult').textContent = roundedBMI;
        displayBMIMessage(roundedBMI);
    } else {
        alert('Please enter valid values for weight and height.');
    }
}

function displayBMIMessage(bmi) {
    let message = '';

    if (bmi < 18.5) {
        message = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        message = 'Overweight';
    } else {
        message = 'Obesity';
    }

    document.getElementById('bmiMessage').textContent = message;
}
