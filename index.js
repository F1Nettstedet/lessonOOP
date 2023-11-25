'use strict'

const body = document.querySelector('body')


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


const create = new DomElement('#Brack', 100, 200, 'red', 30)

const create1 = new DomElement('.ДжагаДжага', 100, 200, 'green', 50)

const create3 = new DomElement('.ДжагаДжага', 100, 200, 'green', 50)

create3.setElement()
create.setElement()


