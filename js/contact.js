(function() {
    emailjs.init("S_P2zGuS3NuI3fw3p"); // Replace with your EmailJS Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_u26zrea", "template_rcra1ii", this)
      .then(function() {
          alert("Message sent successfully!");
          document.getElementById("contactForm").reset();
      }, function(error) {
          alert("Failed to send message. Please try again.\n" + JSON.stringify(error));
      });
});
