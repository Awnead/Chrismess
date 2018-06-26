const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const ent = document.querySelector('input')
const flicks = document.querySelector('#flicks')

const headingChange = function() {
    const frstHead = document.querySelector('#Title')
    frstHead.textContent = 'Chrismess With the Cranks'
}

const addMovie = function() {
    let item = document.createElement('li')
        item.textContent= ent.value
        flicks.appendChild(item)

        ent.value= ""
        ent.focus()
}
const addMovieByEnter = function(par ) {
    if (par.key == "Enter") {
        
        let item = document.createElement('li')
        item.textContent= ent.value
        flicks.appendChild(item)

        ent.value= ""
    }
}

btn1.addEventListener('click', headingChange)
btn2.addEventListener('click', addMovie)
ent.addEventListener('keydown', addMovieByEnter) 