const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const password = document.getElementById('password').value;

    fetch('download.php', {
        method: 'POST',
        body: new URLSearchParams({ password })
    })
    .then(response => response.text())
    .then(data => {
        message.textContent = data;
    });
});