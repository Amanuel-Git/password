const submitButton = document.getElementById("submit-btn");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const emailSubject = document.getElementById("subject");
const userMessage = document.getElementById("message");

submitButton.addEventListener("click", (event) => {
  commenterName = userName.value;
  email = userEmail.value;
  subject = emailSubject.value;
  message = userMessage.value;

  if (commenterName == "" || email == "" || subject == "" || message == "") {
    event.preventDefault();
    alert("Please fill all input fields");
  }
});
