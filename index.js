const btn2 = document.querySelector('#btn2')
const mov = document.querySelector('#Movies')
const yr = document.querySelector('#Yr')
const flicks = document.querySelector('#flicks')


const addMovie = function() {
    let item = document.createElement('li')
    item.innerHTML= `<span><font color="Darkred">${mov.value}</font></span> <span><font color="#A07FC0">(${yr.value})</font></span>`
        flicks.appendChild(item)

        mov.value= ""
        yr.value = ""
        mov.focus()
}
const addMovieByEnter = function(par ) {
    if (par.key == "Enter") {
        
        let item = document.createElement('li')
        item.innerHTML= `<span><font color="Darkred">${mov.value}</font></span> <span><font color="#A07FC0">(${yr.value})</font></span>`
        flicks.appendChild(item)

        mov.value= ""
        yr.value=""
        mov.focus()
    }
}

btn2.addEventListener('click', addMovie)
mov.addEventListener('keydown', addMovieByEnter)
yr.addEventListener('keydown', addMovieByEnter)