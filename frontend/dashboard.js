document.getElementById('helpForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const fullname = document.getElementById('fullname').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;
    const ssn = document.getElementById('ssn').value;
  
    const res = await fetch('http://localhost:5000/moreinfo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullname, dob, phone, ssn })
    });
  
    if (res.ok) {
      document.getElementById('helpForm').style.display = 'none';
      document.getElementById('thanksMessage').style.display = 'block';
    }
  });
  