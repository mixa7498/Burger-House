'use strict'

document.getElementById('main-content-button').onclick = function () {
    document.getElementById('menu-burger').scrollIntoView({behavior: "smooth"})
}

let links = document.querySelectorAll('.menu-items > a');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(`${links[i].getAttribute("data-link")}`).scrollIntoView({behavior: "smooth"})
    }
}

let buttons = document.getElementsByClassName('btn-menu-item')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('order').scrollIntoView({behavior: "smooth"})
    }
}


let input_1 = document.getElementById('input-text')
let input_2 = document.getElementById('input-name')
let input_3 = document.getElementById('input-number')
let inputs = [input_1, input_2, input_3]
let userOrders = []
document.querySelector(".order-btn").onclick = function () {
    let Error = false;
    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].value === "") {
            inputs[i].parentElement.style.background = '#fc6565';
            Error = true;
        } else {
            inputs[i].parentElement.style.background = '';
        }
    }
    if (Error === false) {
        console.log("Данные успешно отправлены!")
        for (let i = 0; i < inputs.length; i++) {
            console.log(inputs[i].value)
            inputs[i].value = ""
        }
    }
}