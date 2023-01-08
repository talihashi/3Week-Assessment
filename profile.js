let color = document.querySelector("#color")
let place = document.querySelector("#place")
let ritual = document.querySelector("#ritual")

function alertColor() {
    alert("My favorite color is red!")
}
function alertPlace() {
    alert("My favorite place is in the forests of Washington.")
}
function alertRitual() {
    alert("My favorite ritual is giving my cat some cuddles in the morning.")
}

color.addEventListener("click", alertColor)
place.addEventListener("click", alertPlace)
ritual.addEventListener("click", alertRitual)