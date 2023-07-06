const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength");

passwordInput.addEventListener("input", updateStrengthBar);

function updateStrengthBar() {
  const strength = calculateStrength(passwordInput.value);
  strengthBar.value = strength;
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
