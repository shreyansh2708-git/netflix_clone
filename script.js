document.getElementById('sign_in_button').onclick = function () {
    alert('Redirecting to login page...');
  };
  
  document.getElementById('start').onclick = function () {
    let email = document.getElementById('email').value;
    if (email) {
      alert('Thanks for signing up with ' + email);
    } else {
      alert('Please enter an email address.');
    }
  };
  