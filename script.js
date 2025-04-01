
  document.addEventListener('DOMContentLoaded', function() {
    const contForm = document.querySelector('#contact form');
    contForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      alert(' message Sent!');
      contactForm.reset();
    });
  });
  
