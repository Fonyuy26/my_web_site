<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

  (function() {
    emailjs.init("S_P2zGuS3NuI3fw3p"); 
  })();

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_u26zrea", "template_rcra1ii", this)
      .then(function() {
        alert("Message sent successfully ✅");
      }, function(error) {
        alert("Failed to send message ❌: " + JSON.stringify(error));
      });
  });
