const passwordInput = document.getElementById("password");
const progressFill = document.getElementById("progress-fill");
const feedback = document.getElementById("feedback");

passwordInput.addEventListener("input", updateProgressBar);

function updateProgressBar() {
  const strength = calculateStrength(passwordInput.value);
  progressFill.style.width = `${strength}%`;

  if (passwordInput.value.length < 8 && strength <= 33) {
    progressFill.style.backgroundColor = "red";
    feedback.textContent = "Should be longer";
  } else if (strength <= 66 && passwordInput.value.length < 12) {
    progressFill.style.backgroundColor = "orange";
    feedback.textContent = "Pretty good";
  } else {
    progressFill.style.backgroundColor = "limegreen";
    feedback.textContent = "Grrrreat!";
  }
}

function calculateStrength(password) {
  let strength = password.length * 5;

  if (strength > 100) {
    strength = 100;
  } else if (strength < 0) {
    strength = 0;
  }

  return strength;
}
