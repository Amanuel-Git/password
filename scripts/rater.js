const passwordInput = document.getElementById("password-input");
const analyzeButton = document.getElementById("analyze-button");

analyzeButton.addEventListener("click", (event) => {
  event.preventDefault();

  const password = passwordInput.value;
  if (!password) {
    alert("Please insert a password to analyze.");
    return;
  }

  const { strength, suggestions } = checkStrength(password);
  const reportBox = document.getElementsByClassName("strength-report-box")[0];
  const strengthReport = document.getElementsByClassName("strength-report")[0];

  const reportMap = {
    1: "Poor",
    2: "Bad",
    3: "Good",
    4: "Great",
    5: "Excellent",
  };

  reportBox.style.display = "flex";
  strengthReport.textContent = reportMap[strength];

  const suggestionBox = document.getElementsByClassName("suggestion-box")[0];
  const suggestionTitle =
    document.getElementsByClassName("suggestion-title")[0];

  if (suggestions.length != 0) {
    suggestionBox.style.display = "flex";
    suggestionTitle.style.display = "flex";
    suggestionBox.innerHTML = "";
    suggestions.forEach((suggestion) => {
      const p = document.createElement("p");
      p.textContent = suggestion;
      suggestionBox.appendChild(p);
    });
  } else {
    suggestionBox.style.display = "none";
    suggestionTitle.style.display = "none";
  }
});

function checkStrength(password) {
  strength = 0;
  suggestions = [];

  if (password.length < 8) {
    suggestions.push("Make the password longer than 8 characters.");
  } else {
    strength += 1;
  }

  if (password.match(/[a-z]/)) {
    strength += 1;
  } else {
    suggestions.push("Include lowercase letters.");
  }

  if (password.match(/[A-Z]/)) {
    strength += 1;
  } else {
    suggestions.push("Include uppercase letters.");
  }

  if (password.match(/\d/)) {
    strength += 1;
  } else {
    suggestions.push("Include at least one number.");
  }

  if (password.match(/[^a-zA-Z\d]/)) {
    strength += 1;
  } else {
    suggestions.push("Include at least one special character.");
  }

  return {
    strength: strength,
    suggestions: suggestions,
  };
}
