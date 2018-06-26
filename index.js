const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const mov = document.querySelector('#Movies')
const bdy = document.querySelector('#birthdates')
const flicks = document.querySelector('#flicks')
const bdys= document.querySelector('#Birthdays')

const headingChange = function() {
    const frstHead = document.querySelector('#Title')
    frstHead.textContent = 'Chrismess With the Cranks'
}

const addMovie = function() {
    let item = document.createElement('li')
        item.textContent= mov.value
        flicks.appendChild(item)

        mov.value= ""
        mov.focus()
}
const addMovieByEnter = function(par ) {
    if (par.key == "Enter") {
        
        let item = document.createElement('li')
        item.textContent= mov.value
        flicks.appendChild(item)

        mov.value= ""
    }
}
const addBirthday = function() {
    let item = document.createElement('li')
        item.textContent= bdy.value
        bdys.appendChild(item)

        bdy.value= ""
        bdy.focus()
}
const addBirthdayEnter = function(par ) {
    if (par.key == "Enter") {
        
        let item = document.createElement('li')
        item.textContent= bdy.value
        bdys.appendChild(item)

        bdy.value= ""
    }
}

btn1.addEventListener('click', headingChange)
btn2.addEventListener('click', addMovie)
btn3.addEventListener('click', addBirthday)
mov.addEventListener('keydown', addMovieByEnter)
bdy.addEventListener('keydown', addBirthdayEnter)