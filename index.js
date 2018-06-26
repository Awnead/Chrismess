const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const ent = document.querySelector('input')
const flicks = document.querySelector('#flicks')

const headingChange = function() {
    const frstHead = document.querySelector('#Title')
    frstHead.textContent = 'Chrismess With the Cranks'
}
const emoteChange = function() {
    const scndHead = document.querySelector('#emote')
    scndHead.textContent= 'I am Happy'
}
const txtBoxHead = function() {
    let item = document.createElement('li')
        item.textContent= ent.value
        flicks.appendChild(item)

        ent.value= ""
        ent.focus()
}
const txtBoxEnt = function(par ) {
    if (par.key == "Enter") {
        
        let item = document.createElement('li')
        item.textContent= ent.value
        flicks.appendChild(item)

        ent.value= ""
    }
}

btn1.addEventListener('click', headingChange)
btn2.addEventListener('click', emoteChange)
btn3.addEventListener('click', txtBoxHead)
ent.addEventListener('keydown', txtBoxEnt) 