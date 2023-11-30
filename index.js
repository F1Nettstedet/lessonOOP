'use strict'

const body = document.querySelector('body')

const movement = function(event) {
    if(event.key === 'ArrowLeft'){
        console.log(this.square.style.left = `10px`)
    } 

}

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.setElement = function () {
        if (this.selector[0] === '.') {
            const setElement = document.createElement('div')

            const elemP = document.createElement('p')
            elemP.textContent = 'Привет,меня создали через класс'

            setElement.append(elemP)
            setElement.classList.add(this.selector.slice(1))

            setElement.style.cssText = `
            height: ${this.height + 'px'};
            width: ${this.width + 'px'};
            background: ${this.bg};
            fontSize: ${this.fontSize + 'px'}`

            body.append(setElement)
        }
        if (this.selector[0] === '#') {
            const setById = document.createElement('p')
            setById.textContent = 'Привет,я создана через ID'
            setById.id = this.selector.slice(1)
    
            setById.style.cssText = `
            height: ${this.height + 'px'};
            width: ${this.width + 'px'};
            background: ${this.bg};
            fontSize: ${this.fontSize + 'px'}  `
    
            body.append(setById)
        } 


    }
       
}

DomElement.prototype.createSquare = function() {
    let count = 0
    let top = 248
    const square = document.createElement('div')
    
    square.style.cssText = `
    width: 100px;
    height: 100px;
    background: red;
    position: absolute;
    `
    body.append(square)



    document.addEventListener('keydown',(event) => {
        
        
        if(event.key === 'ArrowLeft'){
            count = count + 10
            console.log(square.style.left = (count) + 'px') 
        }

       if (event.key === 'ArrowRight'){
            count = count - 10
            console.log(square.style.left = (count) + 'px')
        }

        if(event.key === 'ArrowUp'){
            top = top + 10
            console.log(square.style.top = (top) + 'px')

        }
        else if(event.key === 'ArrowDown'){
            top = top - 10
            square.style.top = (top) + 'px'
        }
           
    })

}



const create = new DomElement('#ID', 100, 200, 'red', 30)


const create3 = new DomElement('.Class', 100, 200, 'green', 50)

const square = new DomElement()

document.addEventListener('DOMContentLoaded',function(){
    square.createSquare()
})



create3.setElement()
create.setElement()



