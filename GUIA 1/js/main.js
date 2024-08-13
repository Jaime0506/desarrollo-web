const $bars = document.getElementById("bars")
const $menu = document.getElementById("menu")

// Accesibility
const $navbar = document.getElementById("navbar")
const $about = document.getElementById("about")
const $education = document.getElementById("education")
const $project = document.getElementById("project")

// Sections
const $aboutSection = document.getElementById("about-section")
const $educationSection = document.getElementById("education-section")
const $projectSection = document.getElementById("projects-section")

const readText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1
    utterance.pitch = 1
    utterance.lang = 'es-CO'
    speechSynthesis.speak(utterance)
}

$bars.addEventListener("click", () => {
    $menu.classList.toggle("active")
})

$navbar.addEventListener("focus", () => {
    readText($navbar.getAttribute("aria-label"))
})

$about.addEventListener("focus", () => {
    readText($about.getAttribute("aria-label"))
})

$education.addEventListener("focus", () => {
    readText($education.getAttribute("aria-label"))
})

$project.addEventListener("focus", () => {
    readText($project.getAttribute("aria-label"))
})

// Sections
$aboutSection.addEventListener("focus", () => {
    readText($aboutSection.textContent)
})

$educationSection.addEventListener("focus", () => {
    readText($educationSection.textContent)
})

$projectSection.addEventListener("focus", () => {
    readText($projectSection.textContent)
})