// set the scripting for timer updates
function updateTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    const currentTime = Date.now();

    if (timeElement) {
        timeElement.textContent = currentTime;
    }
}

updateTime();

setInterval(updateTime, 1000);


// scripting for contact
const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
      successMsg.textContent = "";

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      let valid = true;

      if (!name) {
        document.getElementById("error-name").textContent =
          "Full name is required.";
        valid = false;
      }

      if (!email) {
        document.getElementById("error-email").textContent = "Email is required.";
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("error-email").textContent = "Enter a valid email.";
        valid = false;
      }

      if (!subject) {
        document.getElementById("error-subject").textContent =
          "Subject is required.";
        valid = false;
      }

      if (!message) {
        document.getElementById("error-message").textContent =
          "Message is required.";
        valid = false;
      } else if (message.length < 10) {
        document.getElementById("error-message").textContent =
          "Message must be at least 10 characters.";
        valid = false;
      }

      if (valid) {
        successMsg.style.color = "green";
        successMsg.textContent = "Your message has been sent successfully!";
        form.reset();
      }
    });
  }
