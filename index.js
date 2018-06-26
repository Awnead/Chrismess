const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const ent = document.querySelector('input')


const headingChange = function() {
    const frstHead = document.querySelector('#Title')
    frstHead.textContent = 'Chrismess With the Cranks'
}
const emoteChange = function() {
    const scndHead = document.querySelector('#emote')
    scndHead.textContent= 'I am Happy'
}
const txtBoxHead = function() {
    const frstHead = document.querySelector('#Title')
    frstHead.textContent = ent.value
}
const txtBoxEnt = function(par ) {
    if (par.key == "Enter") {
        const flicksDiv = document.querySelector('#flicks')
        flicksDiv.innerHTML += `<p>` + ent.value + `</p>`
    }
}

btn1.addEventListener('click', headingChange)
btn2.addEventListener('click', emoteChange)
btn3.addEventListener('click', txtBoxHead)
ent.addEventListener('keydown', txtBoxEnt)