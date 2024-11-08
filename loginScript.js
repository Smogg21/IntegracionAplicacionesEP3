document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const correo = document.getElementById('login-correo').value;
  const password = document.getElementById('login-password').value;

  const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correo, password })
  });

  const result = await response.text();
  alert(result);
});
