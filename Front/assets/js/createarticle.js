const jwt = localStorage.getItem('token');

/**
 * Registers a user by sending a POST request to the server.
 * @async
 */
/**
 * Creates an article by sending a POST request to the server.
 * @async
 * @function createarticle
 * @returns {Promise<void>} A Promise that resolves when the article is created successfully.
 */
async function createarticle() {

    const category_id = document.querySelector('#category_id').value;
    const display_name = document.querySelector('#display_name').value;
    const nm_limit = document.querySelector('#nm_limit').value;
    const speed = document.querySelector('#speed').value;
    const seats = document.querySelector('#seats').value;
    const max_kg = document.querySelector('#max_kg').value;



let model = {
    category_id: category_id,
    display_name: display_name,
    nm_limit: nm_limit,
    speed: speed,
    seats: seats,
    max_kg: max_kg

   
};

try {
    const response = await fetch("http://localhost:3000/model/createarticle", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${jwt}`
        },
        body: JSON.stringify(model)
    });


    const data = await response.json();
    

    if (response.ok) {
      
        window.location.href = './../../assets/src/location.html';
    } else {
        alert(data.message);
    }
} catch (error) {
    console.error('Error :', error);
    alert('A Problem occurred while creating the article. Please try again later.');
}
}



