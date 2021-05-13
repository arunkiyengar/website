const emailAddress = 'Email: aki at akiyengar dot com';
let contactInfo = document.getElementsByClassName('contact-info');
contactInfo = Array.from(contactInfo);
contactInfo.forEach((location) => location.innerHTML = emailAddress);
