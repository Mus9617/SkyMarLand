
async function createbooking() {
    const jwt = localStorage.getItem('token');
    const start_date = document.querySelector('#datestart').value;
    const end_date = document.querySelector('#dateend').value;
    const id = localStorage.getItem('article_id');
   

    let booking = {
     
      datestart: start_date,
      dateend: end_date,

    };

    try {
        const response = await fetch(`http://localhost:3000/booking/createbooking/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${jwt}`
            },
            body: JSON.stringify(booking)
        });

        const data = await response.json();

        if (response.ok) {
            window.location.href = './../../assets/src/location.html';
        } else {
            alert("Please fill in all the fields");
        }
    } catch (error) {
        console.error('Error :', error);
        alert('A Problem occurred while creating the booking. Please try again later.');
    }
}