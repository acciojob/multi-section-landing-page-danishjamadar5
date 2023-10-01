//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('newsletter-form');
            const emailInput = document.getElementById('email');
            const message = document.getElementById('message');

            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const email = emailInput.value.trim();

                if (!isValidEmail(email)) {
                    message.textContent = 'Please enter a valid email address.';
                    message.style.color = 'red';
                    return;
                }

                // Here, you can send the email to your server or perform other actions.
                // For now, just display a success message.
                message.textContent = 'Thank you for subscribing!';
                message.style.color = 'green';

                // Clear the input field
                emailInput.value = '';
            });

            function isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
        });