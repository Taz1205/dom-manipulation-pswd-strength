const passwordInput = document.getElementById("password");
const progressFill = document.getElementById("progress-fill");

passwordInput.addEventListener("input", updateProgressBar);

function updateProgressBar() {
  const strength = calculateStrength(passwordInput.value);
  progressFill.style.width = `${strength}%`;

  if (strength <= 33) {
    progressFill.style.backgroundColor = "red";
  } else if (strength <= 66) {
    progressFill.style.backgroundColor = "orange";
  } else {
    progressFill.style.backgroundColor = "limegreen";
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
