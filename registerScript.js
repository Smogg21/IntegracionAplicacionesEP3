document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombres = document.getElementById('nombres').value;
  const apellidoPaterno = document.getElementById('apellidoPaterno').value;
  const apellidoMaterno = document.getElementById('apellidoMaterno').value;
  const correo = document.getElementById('correo').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombres, apellidoPaterno, apellidoMaterno, correo, password })
  });

  const result = await response.text();
  window.location.href = 'pages-login.html';
  alert(result);
});
