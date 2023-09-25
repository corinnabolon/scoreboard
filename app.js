let home = 0
let away = 0

function increaseScore(team) {
  if (team == "home") {
    home += 1
    checkScore(home)
  } else if (team == "away") {
    away += 1
    checkScore(away)
  }
  console.log(`Home Score: ${home}, Away Score ${away}`)
  drawScore()
}

// function increaseHome() {
//   home += 1
//   console.log(`Home Score: ${home}, Away Score ${away}`)
//   checkScore(home)
//   drawScore()
// }

// function increaseAway() {
//   away += 1
//   console.log(`Home Score: ${home}, Away Score ${away}`)
//   checkScore(away)
//   drawScore()
// }

function increaseMore(team) {
  console.log(team)
  if (team == "home") {
    home += 3
    checkScore(home)
  } else if (team == "away") {
    away += 3
    checkScore(away)
  }
  console.log(`Home Score: ${home}, Away Score ${away}`)
  checkScore(team)
  drawScore()
}

// function increaseHomeMore() {
//   home += 3
//   console.log(`Home Score: ${home}, Away Score ${away}`)
//   checkScore(home)
//   drawScore()
// }

// function increaseAwayMore() {
//   away += 3
//   console.log(`Home Score: ${home}, Away Score ${away}`)
//   checkScore(away)
//   drawScore()
// }

function decreaseScore(team) {
  if (team == "home") {
    if (home >= 1) {
      home -= 1
    }
  } else if (team == "away") {
    if (away >= 1) {
      away -= 1
    }
  }
  console.log(team)
  console.log(`Home Score: ${home}, Away Score ${away}`)
  drawScore()
}

// function decreaseHome() {
//   if (home >= 1) {
//     home -= 1
//     console.log(`Home Score: ${home}, Away Score ${away}`)
//     drawScore()
//   }
// }

// function decreaseAway() {
//   if (away >= 1) {
//     away -= 1
//     console.log(`Home Score: ${home}, Away Score ${away}`)
//     drawScore()
//   }
// }

function restart() {
  home = 0
  away = 0
  drawScore()
}


function drawScore() {
  let homeScoreElement = document.getElementById("homeScore")
  homeScoreElement.innerText = home
  let awayScoreElement = document.getElementById("awayScore")
  awayScoreElement.innerText = away
}

function checkScore(team) {
  if (team > 21) {
    restart()
  }
}