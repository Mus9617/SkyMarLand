
const id = localStorage.getItem('article_id');  




/**
 * Fetches data from the server and updates the fields with the retrieved data.
 * @async
 * @function fieldUpdate
 * @throws {Error} If there is an error during the update process.
 */
async function fieldUpdate() {

    try {
        const response = await fetch(`http://localhost:3000/model/getallmodelsbyid/${id}`);
        const data = await response.json();
        console.log(data);

        category_id.value = data[0].category_id;
        display_name.value = data[0].display_name;
        nm_limit.value = data[0].nm_limit;
        speed.value = data[0].speed;
        seats.value = data[0].seats;
        max_kg.value = data[0].max_kg;

    } catch (error) {
        console.error('Error at Update:', error);
        alert('Ocurrió un error al actualizar el modelo. Por favor, intenta nuevamente más tarde.');
    }
}
fieldUpdate();










async function updateModel() {
    const nm_limit = document.querySelector('#nm_limit').value;
    const speed = document.querySelector('#speed').value;
    const seats = document.querySelector('#seats').value;
    const max_kg = document.querySelector('#max_kg').value;
    const name = document.querySelector('#display_name').value;
    const category = document.querySelector('#category_id').value;

    let model = {
        category_id: category,
        display_name: name,
        nm_limit: nm_limit,
        speed: speed,
        seats: seats,
        max_kg: max_kg
    };

    try {
        /**
         * Represents the response from the server after making a PATCH request.
         * @typedef {Object} Response
         * @property {boolean} ok - Indicates if the request was successful.
         * @property {number} status - The HTTP status code of the response.
         * @property {string} statusText - The status message corresponding to the status code.
         * @property {Headers} headers - The headers of the response.
         * @property {function} clone - Creates a clone of the response.
         * @property {function} error - Throws an error if the response was not successful.
         * @property {function} redirect - Creates a new response with a different URL.
         * @property {function} blob - Returns a promise that resolves with the response body as a Blob.
         * @property {function} formData - Returns a promise that resolves with the response body as FormData.
         * @property {function} json - Returns a promise that resolves with the response body as JSON.
         * @property {function} text - Returns a promise that resolves with the response body as text.
         */
        const response = await fetch(`http://localhost:3000/model/updatemodel/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model)
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.removeItem('article_id');
            window.location.href = './../../assets/src/location.html';
        } else {
            alert("Ocurrió un error al actualizar el modelo. Por favor, intenta nuevamente más tarde.");
        }
    } catch (error) {
        console.error('Error at Update:', error);
        alert('Ocurrió un error al actualizar el modelo. Por favor, intenta nuevamente más tarde.');
    }
}