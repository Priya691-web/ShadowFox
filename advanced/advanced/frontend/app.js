// Register handler
document.getElementById('registerForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('rname').value;
  const email = document.getElementById('remail').value;
  const password = document.getElementById('rpassword').value;

  try {
    const res = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    document.getElementById('status').textContent = res.ok
      ? 'Registration successful!'
      : data.message || 'Registration failed';
  } catch (err) {
    console.error(err);
    document.getElementById('status').textContent = 'Error registering';
  }
});

// Login handler
document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('lemail').value;
  const password = document.getElementById('lpassword').value;

  try {
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      document.getElementById('username').textContent = data.name;
      document.getElementById('auth').style.display = 'none';
      document.getElementById('userArea').style.display = 'block';
    } else {
      document.getElementById('status').textContent = data.message || 'Login failed';
    }
  } catch (err) {
    console.error(err);
    document.getElementById('status').textContent = 'Error logging in';
  }
});