// function createStars() {
//     const starField = document.getElementById('starField');
//     const numStars = 200;

//     for (let i = 0; i < numStars; i++) {
//         const star = document.createElement('div');
//         star.className = 'star';
//         star.style.left = `${Math.random() * 100}%`;
//         star.style.top = `${Math.random() * 100}%`;
//         star.style.animationDuration = `${Math.random() * 3 + 2}s`;
//         star.style.animationDelay = `${Math.random() * 3}s`;
//         starField.appendChild(star);
//     }
// }

function toggleFeetInches() {
    const heightUnit = document.getElementById('height-unit').value;
    const heightInput = document.getElementById('height');
    const feetInches = document.querySelector('.feet-inches');

    if (heightUnit === 'ft') {
        heightInput.style.display = 'none';
        feetInches.style.display = 'flex';
    } else {
        heightInput.style.display = 'block';
        feetInches.style.display = 'none';
    }
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightUnit = document.getElementById('height-unit').value;
    let height;

    if (heightUnit === 'ft') {
        const feet = parseFloat(document.getElementById('feet').value);
        const inches = parseFloat(document.getElementById('inches').value) || 0;
        height = (feet * 12 + inches) * 0.0254; // Convert to meters
    } else {
        height = parseFloat(document.getElementById('height').value);
        if (heightUnit === 'cm') {
            height = height / 100; // Convert cm to meters
        } else if (heightUnit === 'in') {
            height = height * 0.0254; // Convert inches to meters
        }
    }

    const result = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.textContent = 'Please enter valid weight and height.';
        result.style.opacity = '1';
        return;
    }

    const bmi = weight / (height * height);
    let category;

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
   
    result.innerHTML = `Your BMI is <span style="color: #ffffff;">${bmi.toFixed(2)}</span><br>(${category})`;
    result.style.opacity = '1';
}

// Initialize the page
// createStars();
toggleFeetInches();