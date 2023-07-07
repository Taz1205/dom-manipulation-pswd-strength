const passwordInput = document.getElementById("password");
const progressFill = document.getElementById("progress-fill");
const feedback = document.getElementById("feedback");

passwordInput.addEventListener("input", updateProgressBar);

function updateProgressBar() {
  const strength = calculateStrength(passwordInput.value);
  progressFill.style.width = `${strength}%`;
  console.log(passwordInput.value.length);

  if (passwordInput.value.length < 8 && strength <= 40) {
    progressFill.style.backgroundColor = "red";
    feedback.textContent = "Should be longer";
  } else if (strength <= 70 && passwordInput.value.length < 12) {
    progressFill.style.backgroundColor = "orange";
    feedback.textContent = "Pretty good";
  } else {
    progressFill.style.backgroundColor = "limegreen";
    feedback.textContent = "Grrrreat!";
  }
  checkForStrongPassword(passwordInput.value);
}

function checkForStrongPassword(password) {
  if (
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[\W]/.test(password)
  ) {
    feedback.textContent +=
      " ,to make your password stronger, include a mix of upper-case, lower-case letters, numbers and spl characters";
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
