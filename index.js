let homeScore = 0;
let guestScore = 0;

let homeScoreElement = document.getElementById("homeScore")
homeScoreElement.textContent = homeScore
let guestScoreElement = document.getElementById("guestScore")
guestScoreElement.textContent = guestScore

function addPointsToHome(amount) {
    homeScore += amount    
    homeScoreElement.textContent = homeScore
    showLeader()
} 

function addPointsToGuest(amount) {
    guestScore += amount    
    guestScoreElement.textContent = guestScore
    showLeader()
} 

function resetPoints() {
    homeScore = 0
    guestScore = 0
    homeScoreElement.textContent = homeScore
    guestScoreElement.textContent = guestScore
    showLeader()

}

function showLeader() {
    if (homeScore > guestScore) {
        document.getElementById("homeTeamNameHeader").style.color = "green"
        document.getElementById("guestTeamNameHeader").style.color = "red"

    } else if (homeScore == guestScore) {
        document.getElementById("homeTeamNameHeader").style.color = "white"
        document.getElementById("guestTeamNameHeader").style.color = "white"
    } else {
        document.getElementById("homeTeamNameHeader").style.color = "red"
        document.getElementById("guestTeamNameHeader").style.color = "green"

    }

}