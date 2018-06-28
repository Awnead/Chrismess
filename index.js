const btn2 = document.querySelector('#btn2')
const mov = document.querySelector('#Movies')
const yr = document.querySelector('#Yr')
const flicks = document.querySelector('#flicks')
const form = document.querySelector('form')

const renderProp = function(name, val){
const span = document.createElement('span')
span.classList.add(name)
span.textContent=val
return span
}

const renderItem = function(mvSpan,yrSpan){
let item = document.createElement('li')
item.appendChild(mvSpan)
item.appendChild(yrSpan)
flicks.appendChild(item)
}

const SubmitHandler= function(ev) {
ev.preventDefault()
const movSpan = renderProp("Flick", mov.value)
const yrSpan = renderProp("Created", yr.value)
renderItem(movSpan, yrSpan)

mov.value= ""
yr.value = ""
mov.focus()
}


form.addEventListener('submit', SubmitHandler)