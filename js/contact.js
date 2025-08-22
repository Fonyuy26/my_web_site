(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(function() {
          alert("Message sent successfully!");
          document.getElementById("contactForm").reset();
      }, function(error) {
          alert("Failed to send message. Please try again.\n" + JSON.stringify(error));
      });
});
