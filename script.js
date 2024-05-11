(function () {
    "use strict";

    let forms = document.querySelectorAll('form');

    forms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let formData = new FormData(this);
            let action = "https://formspree.io/f/mpzvroad"; // Your Formspree endpoint

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
                        displayError(form, data.error);
                    } else {
                        displaySuccess(form);
                    }
                })
                .catch(error => {
                    displayError(form, error.message);
                });
        });
    });

    function displayError(form, message) {
        form.querySelector('.loading').classList.remove('hidden');
        form.querySelector('.error-message').innerHTML = message;
        form.querySelector('.error-message').classList.add('hidden');
        form.querySelector('.sent-message').classList.remove('hidden');
    }

    function displaySuccess(form) {
        form.querySelector('.loading').classList.remove('hidden');
        form.querySelector('.error-message').classList.remove('hidden');
        form.querySelector('.sent-message').classList.add('hidden');
        form.reset();
    }

})();
