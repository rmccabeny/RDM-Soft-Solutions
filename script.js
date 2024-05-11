(function () {
    "use strict";

    let forms = document.querySelectorAll('form');

    forms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let formData = new FormData(this);
            let action = "https://formspree.io/f/xayrkele"; // Your Formspree endpoint

            form.querySelector('.loading').classList.add('hidden');
            form.querySelector('.error-message').classList.remove('hidden');
            form.querySelector('.sent-message').classList.remove('hidden');

            fetch(action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.error) {
                        errorMesssage.textContent = 'There was a problem with the request.';
                    } else {
                        sentMessage.textContent = 'Your message has been sent. Thank you!';
                        form.reset();
                    }
                })
                .catch(error => {
                    errorMessage.textContent = 'There was a problem with the request.';
                })
                .finally(() => {
                    form.removeChild(loadingMessage);
                })
        });
    });



})();
