import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

<script>
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var mailtoLink = 'mailto:u.manoj3p0@gmail.com' +
      '?subject=' + encodeURIComponent('New Contact Form Submission') +
      '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
    window.location.href = mailtoLink;
  });
</script>
