let homeScore = 0
let guestScore = 0

let homeCount = document.getElementById("home-count")

let guestCount = document.getElementById("guest-count")

function oneh() {
    homeScore += 1
    homeCount.innerText = homeScore
}

function twoh() {
    homeScore += 2
    homeCount.innerText = homeScore
}

function threeh() {
    homeScore += 3
    homeCount.innerText = homeScore
}

function oneg() {
    guestScore += 1
    guestCount.innerText = guestScore
}

function twog() {
    guestScore += 2
    guestCount.innerText = guestScore
}

function threeg() {
    guestScore += 3
    guestCount.innerText = guestScore
}

function reset() {
    guestScore = 0
    homeScore = 0
    homeCount.innerText = homeScore
    guestCount.innerText = guestScore
}