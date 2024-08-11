const $button = document.getElementById("btn")

let counter = 0
const messages = [
    "Estudiate de ing Software",
    "19 Años",
    "Autodidacta",
    "Yon esgay"
]

$button.addEventListener("click", () => {
    const $about = document.getElementById("about")

    if (counter == messages.length) counter = 0

    $about.innerHTML = messages[counter]

    counter++
})

