class App {
    constructor() {
        const form = document.querySelector('form')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.SubmitHandler(ev)})
    }

        renderProp(name, val){
        const span = document.createElement('span')
        span.classList.add(name)
        span.textContent=val
        return span
        }
        
        renderItem(mvSpan,yrSpan){
        let item = document.createElement('li')
        item.appendChild(mvSpan)
        item.appendChild(yrSpan)
        const flicks = document.querySelector('#flicks')
        flicks.appendChild(item)
        }
        


        SubmitHandler(ev) {
        const mov = document.querySelector('#Movies')
        const yr = document.querySelector('#Yr')
        
        const movSpan = this.renderProp("Flick", mov.value)
        const yrSpan = this.renderProp("Created", yr.value)
        this.renderItem(movSpan, yrSpan)
        
        mov.value= ""
        yr.value = ""
        mov.focus()
        }
        
        
        
}

const app = new App()





