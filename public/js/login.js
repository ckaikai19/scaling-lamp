const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
  
    if (username && password && email) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password, email }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);