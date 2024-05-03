/**
 * Sends an email with the provided data.
 * @async
 * @function sendEmail
 */
async function sendEmail() {
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const date = document.getElementById('date').value;
    console.log(profession, email, phone, country, date);

    const data = {
        profession,
        email,
        phone,
        country,
        date
    };

    try {
        const response = await fetch('http://localhost:3000/User/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log(result);

        if (result.status === 200) {
            alert('Email Sent');
        } else {
            alert('Email Not Sent');
        }
    } catch (error) {
        console.log(error);
    }
}


