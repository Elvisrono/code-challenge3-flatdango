document.addEventListener("DOMContentLoaded", function(){
        
    const url = "https://api.npoint.io/0fd99609eb72596d7c69/films/"
    const filmsDiv = document.querySelector("#films")
    const posterDiv = document.querySelector("#poster")
    const showingDiv = document.querySelector("#showing")
    const tktsBtn = showingDiv.querySelector('.ui.orange.button')


    getFirstMovie();
    getAllFilms()

    // display movie description

    function getFirstMovie(){
        fetch(url+'/1')
    .then(response => response.json())
    .then(film => renderFilm(film));
    }

    function renderFilm(film){
        posterDiv.dataset.id = film.id
        posterDiv.src = film.poster
        showingDiv.dataset.id = film.id
        showingDiv.dataset.capacity = film.capacity
        showingDiv.dataset.tickets_sold = film.tickets_sold
        showingDiv.querySelector("#title").innerText = film.title
        showingDiv.querySelector("#film-info").innerText = film.description
        showingDiv.querySelector("#runtime").innerText = film.runtime +" Minutes"
        showingDiv.querySelector("#showtime").innerText = film.showtime
        showingDiv.querySelector("#ticket-num").innerText = parseInt(film.capacity) - parseInt(film.tickets_sold)
        if (parseInt(film.capacity)-parseInt(film.tickets_sold)<1){
            tktsBtn.innerText = "Sold Out" 
            tktsBtn.disabled = true
            tktsBtn.className = "sold-out"
        } else {
            tktsBtn.innerText = "Buy Ticket" 
            tktsBtn.disabled = false
            tktsBtn.className = "ui orange button"
        }

    }

    // one is able to buy a ticket

    tktsBtn.addEventListener('click', function(){
        let id = showingDiv.dataset.id
        let capacity = showingDiv.dataset.capacity
        let tickets_sold = showingDiv.dataset.tickets_sold
        if (parseInt(capacity)-parseInt(tickets_sold)>0){
            tickets_sold = parseInt(tickets_sold)+1
            fetch(url+`/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({tickets_sold: tickets_sold})
            })
            .then(r => r.json())
            .then(film => updateTickets(film))
            function updateTickets(film){
                showingDiv.dataset.tickets_sold = film.tickets_sold
                showingDiv.querySelector("#ticket-num").innerText = parseInt(film.capacity) - parseInt(film.tickets_sold)
                if (parseInt(film.capacity)-parseInt(film.tickets_sold)<1){
                    tktsBtn.innerText = "Sold Out" 
                    tktsBtn.disabled = true
                    tktsBtn.className = "sold-out"
                } 
            }
        }
    })



        // Advanced Deliverable

    function getAllFilms(){
        fetch(url)
    .then(response => response.json())
    .then(films => renderAllFilms(films));
    }


    function renderAllFilms(films){
        const filmList = filmsDiv.children[0]
        filmList.innerText = ""
        const filmListSold = filmsDiv.children[1]
        filmListSold.innerText = "~Sold Out~"

        films.forEach(film =>{
            let filmDiv = document.createElement('div')
            if(parseInt(film.capacity)-parseInt(film.tickets_sold)>1){
            filmDiv.className = "film" 
            filmDiv.id = film.id 
            filmDiv.innerText = `${film.title}`
            filmList.append(filmDiv)
            } else {
            filmDiv.id = film.id
            filmDiv.className = "sold-out"
            filmDiv.innerText = `${film.title}`
            filmListSold.append(filmDiv)
            }
            
        })
    }

        //  Click on a movie in the menu to replace the currently displayed movie's details with the new movie's details.

    filmsDiv.addEventListener('click', function(e){

        let id = e.target.id
        fetch(url+`/${id}`)
        .then(response => response.json())
        .then(film => renderFilm(film));
    })

    


});