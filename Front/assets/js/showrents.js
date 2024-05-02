
const role = localStorage.getItem('role')
   const btncreate = document.querySelector('.test')
   const btnbooking = document.querySelector('.btnbooking')
   console.log(btncreate)
    if (role === 'admin')
     { console.log("je suis dans le role admin");
        btncreate.classList.remove('hidden')
        btnbooking.classList.remove('hidden')

    }
/**
 * Fetches all articles from the server and displays them on the page.
 * @returns {Promise<void>} A promise that resolves when all articles are fetched and displayed.
 */
async function getAllArticles() {
 
   


    let apiCall = await fetch('http://localhost:3000/model/getallmodels')
    let response = await apiCall.json()
    let card = document.querySelector('.price')
   
    response.forEach(article => {
       
        card.innerHTML +=`
        <div class="card">
        
        <h3 class="title">${article.display_name}</h3>
        <p>Category: ${article.category_id}</p>
        <p>NM Limit: ${article.nm_limit} NM </p>
        <p>Max Cruise Knots: ${article.speed} Knots </p>
        <p>Seats:${article.seats}</p>
        <p>Max Cargo: ${article.max_kg} Tons</p>
        <p>Price: Starts at 700€/H</p>
        <button onclick="redirectbooking('${article.id}')">Reserve</button>
        ${role ==='admin'?`<button onclick="deleteModel('${article.id}')">Delete</button>
        <button onclick="redirectUpdate('${article.id}')">Update</button>`:""}
        
        <div>
        </div>`
    });
}
getAllArticles() 


const jwt = localStorage.getItem('token')



async function deleteModel (id) {
    const request = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${jwt}`
        },
    }

    let apiCall = await fetch(`http://localhost:3000/model/deletemodel/${id}`, request)
    let response = await apiCall.json()
    console.log(response)
    window.location.reload()
}


/**
 * Redirects to the updatearticle.html page and stores the article ID in the local storage.
 * @param {number} id - The ID of the article to be updated.
 * @returns {Promise<void>} - A promise that resolves when the redirection is complete.
 */
async function redirectUpdate(id) {
    localStorage.setItem('article_id', id)
    window.location.href = `../../assets/src/updatearticle.html`
}




async function redirectbooking(id) {
    localStorage.setItem('article_id', id)
    window.location.href = `../../assets/src/booking.html`
}


async function showbooking(){
   const book =  document.querySelector('.booking')
      let apiCall = await fetch('http://localhost:3000/booking/getallbookings')
        let response = await apiCall.json()
        book.innerHTML = ""
        response.forEach(booking => {
       
            book.innerHTML +=`
            <div class="card">
            
            <h3 class="title">${booking.display_name}</h3>
            <p> Category: ${booking.name}</p>
            <p>Category: ${booking.email}</p>
            <p>Category: ${booking.country}</p>
            <p>Category: ${booking.category_id}</p>
            <p>Category: ${booking.datestart}</p>
            <p>Category: ${booking.dateend}</p>
            </div>`

      
      
       } )
    }
          
