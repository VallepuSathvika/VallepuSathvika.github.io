document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");

  sendBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields before sending the message 💬");
      return;
    }

    alert("Message sent successfully! Redirecting to home page 🏠");
    window.location.href = "index.html"; // go to home page
  });
});
