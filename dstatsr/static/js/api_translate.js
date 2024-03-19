document.getElementById('translate-button').addEventListener('click', function() {
    var html = document.documentElement.innerHTML;

    fetch('http://127.0.0.1:5000/api/translate/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({html: html}),
    })
    .then(response => response.json())
    .then(data => {
        document.documentElement.innerHTML = data.translated_html;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});