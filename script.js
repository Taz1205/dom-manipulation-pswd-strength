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
  let strength = 0;

  if (password.length >= 8) {
    strength += 25;
  }

  if (/[A-Z]/.test(password)) {
    strength += 25;
  }

  if (/[a-z]/.test(password)) {
    strength += 25;
  }

  if (/[0-9]/.test(password) || /[\W]/.test(password)) {
    strength += 25;
  }

  return strength;
}
