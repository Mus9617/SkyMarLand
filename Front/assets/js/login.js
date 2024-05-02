
/**
 * Logs in the user by sending a POST request to the server with the provided email and password.
 * If the login is successful, it stores the JWT token in the local storage and redirects the user to the location page.
 * If the login fails, it displays an alert with the error message.
 */
async function login() {
     
    const email = document.querySelector('#login').value;
    const password = document.querySelector('#password').value;

    let user = {
        email: email,
        password: password
    };

    try {
        const response = await fetch("http://localhost:3000/User/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });


        const data = await response.json();
        console.log(data.jwt);

        if (response.ok) {
            localStorage.setItem('token', data.jwt);
            localStorage.setItem('role', data.role);
            window.location.href = './../../assets/src/location.html';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('Ocurrió un error al iniciar sesión. Por favor, intenta nuevamente más tarde.');
    }
}












