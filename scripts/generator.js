const lengthInput = document.getElementById("length-input");
const lowerCheckbox = document.getElementById("lowercase-checkbox");
const upperCheckbox = document.getElementById("uppercase-checkbox");
const numberCheckbox = document.getElementById("numbers-checkbox");
const symbolCheckbox = document.getElementById("symbols-checkbox");
const submitBtn = document.getElementById("submit");
const passwordBox = document.getElementsByClassName("password-box")[0];
const passwordParagraph = document.getElementsByClassName("password-text")[0];

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let passwordLength = lengthInput.value;
  let containLowercase = lowerCheckbox.checked;
  let containUppercase = upperCheckbox.checked;
  let containNumber = numberCheckbox.checked;
  let containSymbol = symbolCheckbox.checked;

  if (passwordLength == 0) {
    alert("Please enter a valid password length");
    return;
  }

  if (
    !containLowercase &&
    !containUppercase &&
    !containNumber &&
    !containSymbol
  ) {
    alert("Please select at least one option");
    return;
  }

  let password = generatePassword(
    passwordLength,
    containLowercase,
    containUppercase,
    containNumber,
    containSymbol,
  );

  if (!password) {
    alert("Increase password length to include selected options.");
    return;
  }

  passwordBox.style.display = "flex";
  passwordParagraph.textContent = password;
});

function generatePassword(
  length,
  containLower,
  containUpper,
  containNumber,
  containSymbol,
) {
  let numbers = "0123456789";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let symbols = "`~!@#$%^&*()_-+=[]{}\\|;:'\",<.>/?";
  let charset = "";
  let password = "";
  let insertedCount = 0;

  if (containLower) {
    charset += lowercase;
    let randomIndex = Math.floor(Math.random() * lowercase.length);
    password += lowercase.charAt(randomIndex);
    insertedCount++;
  }

  if (containUpper) {
    charset += uppercase;
    let randomIndex = Math.floor(Math.random() * uppercase.length);
    password += uppercase.charAt(randomIndex);
    insertedCount++;
  }

  if (containNumber) {
    charset += numbers;
    let randomIndex = Math.floor(Math.random() * numbers.length);
    password += numbers.charAt(randomIndex);
    insertedCount++;
  }

  if (containSymbol) {
    charset += symbols;
    let randomIndex = Math.floor(Math.random() * symbols.length);
    password += symbols.charAt(randomIndex);
    insertedCount++;
  }

  if (insertedCount > length) return;

  for (let i = 0; i < length - insertedCount; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  shuffledPassword = shuffle(password.split(""));
  password = shuffledPassword.join("");

  return password;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

passwordBox.addEventListener("click", () => {
  const password = passwordParagraph.innerText;

  navigator.clipboard.writeText(password);
  alert("Text copied to clipboard");
  setTimeout(() => {
    window.location.href = "../pages/rater.html?password=" + encodeURIComponent(password);
  }, 500);
});
