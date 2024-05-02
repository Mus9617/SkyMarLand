

/**
 * Registers a user by sending a POST request to the server.
 * @async
 */
async function register() {

    const name = document.querySelector('#name').value;
    const last_name = document.querySelector('#lastname').value;
    const country = document.querySelector('#country').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const password = document.querySelector('#password').value;



let user = {
    name: name,
    last_name: last_name,
    country: country,
    email: email,
    phone: phone,
    password: password

   
};

try {
    const response = await fetch("http://localhost:3000/User/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });


    const data = await response.json();
    

    if (response.ok) {
      
        window.location.href = './../../assets/src/location.html';
    } else {
        alert(data.message);
    }
} catch (error) {
    console.error('Error at Registration:', error);
    alert('Ocurrió un error al iniciar sesión. Por favor, intenta nuevamente más tarde.');
}
}



