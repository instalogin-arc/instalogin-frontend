document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const response = await fetch('https://instalogin-backend.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      alert('Login Successful! Redirecting...');
      window.location.href = 'index.html'; // You can change this if needed
    } else {
      const error = await response.json();
      alert(`❌ Login failed: ${error.error || 'Unknown error'}`);
    }
  } catch (err) {
    console.error('❌ Request Error:', err);
    alert(`❌ Request failed: ${err.message}`);
  }
});
