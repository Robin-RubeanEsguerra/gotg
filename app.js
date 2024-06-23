let pieces = [
  {
    piece: "5_Star_General",
    power: "12",
  },
  {
    piece: "4_Star_General",
    power: "11",
  },
  {
    piece: "3_Star_General",
    power: "10",
  },
  {
    piece: "2_Star_General",
    power: "9",
  },
  {
    piece: "1_Star_General",
    power: "8",
  },
  {
    piece: "Colonel",
    power: "7",
  },
  {
    piece: "Lieutenant_Colonel",
    power: "6",
  },
  {
    piece: "Major",
    power: "5",
  },
  {
    piece: "Captain",
    power: "5",
  },
  {
    piece: "1st_Lieutenant",
    power: "4",
  },
  {
    piece: "2nd_Lieutenant",
    power: "3",
  },
  {
    piece: "Seargent",
    power: "2",
  },
  {
    piece: "Private",
    power: "1",
  },

  {
    piece: "Spy",
    power: "13",
  },
  {
    piece: "Flag",
    power: "0",
  },
];

let red_player;
let blue_player;

let victor;
let whoWins = document.querySelector("#victor");

let red_player_container = document.querySelector("#red_player_container");
let blue_player_container = document.querySelector("#blue_player_container");

let red_player_piece = document.querySelector("#player_red_piece");
let blue_player_piece = document.querySelector("#player_blue_piece");
let current_player = red_player_piece;
let announce_player = document.querySelector("#announce_current_player");

function choosing_red() {
  current_player = "red";
  announce_player.textContent = "Player Red Choose Your Piece";
  red_player_piece.textContent = "CHOOSING";
  if (blue_player === null || blue_player === undefined) {
    blue_player_piece.textContent = "CHOOSE";
  }
  console.log(current_player);
  const redElements = document.querySelectorAll(".blue");
  redElements.forEach((element) => {
    element.classList.remove("blue");
    element.classList.add("red");
  });
}

function choosing_blue() {
  current_player = "blue";
  announce_player.textContent = "Player Blue Choose Your Piece";
  console.log(current_player);
  blue_player_piece.textContent = "CHOOSING";
  if (red_player === null || red_player === undefined) {
    red_player_piece.textContent = "CHOOSE";
  }

  const redElements = document.querySelectorAll(".red");
  redElements.forEach((element) => {
    element.classList.remove("red");
    element.classList.add("blue");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  function choosePiece(event) {
    const buttonId = event.target.id;
    console.log(buttonId);

    switch (buttonId) {
      case "5_star_general":
        if (current_player === "red") {
          red_player = pieces[0];
          red_player_piece.textContent = "PLAYER CHOSEN";
        } else {
          blue_player = pieces[0];
          blue_player_piece.textContent = "PLAYER CHOSEN";
        }
        break;
      case "4_star_general":
        if (current_player === "red") {
          red_player = pieces[1];
          red_player_piece.textContent = "PLAYER CHOSEN";
        } else {
          blue_player = pieces[1];
          blue_player_piece.textContent = "PLAYER CHOSEN";
        }
        break;
      case "3_star_general":
        if (current_player === "red") {
          red_player = pieces[2];
          red_player_piece.textContent = "PLAYER CHOSEN";
        } else {
          blue_player = pieces[2];
          blue_player_piece.textContent = "PLAYER CHOSEN";
        }
        break;
      case "2_star_general":
        if (current_player === "red") {
          red_player = pieces[3];
          red_player_piece.textContent = "PLAYER CHOSEN";
        } else {
          blue_player = pieces[3];
          blue_player_piece.textContent = "PLAYER CHOSEN";
        }
        break;
      case "1_star_general":
        if (current_player === "red") {
          red_player = pieces[4];
          red_player_piece.textContent = "PLAYER CHOSEN";
        } else {
          blue_player = pieces[4];
          blue_player_piece.textContent = "PLAYER CHOSEN";
        }
        break;
      case "Colonel":
        if (current_player === "red") {
          red_player = pieces[5];
          red_player_piece.textContent = "PLAYER CHOSEN";
          console.log(red_player);
        } else {
          blue_player = pieces[5];
          blue_player_piece.textContent = "PLAYER CHOSEN";
          console.log(blue_player);
        }
        break;
      case "Lieutenant_Colonel":
        if (current_player === "red") {
          red_player = pieces[6];
          red_player_piece.textContent = "PLAYER CHOSEN";
          console.log(red_player);
        } else {
          blue_player = pieces[6];
          blue_player_piece.textContent = "PLAYER CHOSEN";
          console.log(blue_player);
        }
        break;
      case "Major":
        if (current_player === "red") {
          red_player = pieces[7];
          red_player_piece.textContent = "PLAYER CHOSEN";
          console.log(red_player);
        } else {
          blue_player = pieces[7];
          blue_player_piece.textContent = "PLAYER CHOSEN";
          console.log(blue_player);
        }
        break;
      case "Captain":
        if (current_player === "red") {
          red_player = pieces[8];
          red_player_piece.textContent = "PLAYER CHOSEN";
          console.log(red_player);
        } else {
          blue_player = pieces[8];
          blue_player_piece.textContent = "PLAYER CHOSEN";
          console.log(blue_player);
        }
        break;
      case "1st_Lieutenant":
        if (current_player === "red") {
          red_player = pieces[9];
          red_player_piece.textContent = "PLAYER CHOSEN";
          console.log(red_player);
        } else {
          blue_player = pieces[9];
          blue_player_piece.textContent = "PLAYER CHOSEN";
          console.log(blue_player);
        }
        break;
      case "2nd_Lieutenant":
        if (current_player === "red") {
          red_player = pieces[10];
          red_player_piece.textContent = "PLAYER CHOSEN";
          console.log(red_player);
        } else {
          blue_player = pieces[10];
          blue_player_piece.textContent = "PLAYER CHOSEN";
          console.log(blue_player);
        }
        break;
      case "Seargent":
        if (current_player === "red") {
          red_player = pieces[11];
          red_player_piece.textContent = "PLAYER CHOSEN";
          console.log(red_player);
        } else {
          blue_player = pieces[11];
          blue_player_piece.textContent = "PLAYER CHOSEN";
          console.log(blue_player);
        }
        break;
      case "Private":
        if (current_player === "red") {
          red_player = pieces[12];
          red_player_piece.textContent = "PLAYER CHOSEN";
          console.log(red_player);
        } else {
          blue_player = pieces[12];
          blue_player_piece.textContent = "PLAYER CHOSEN";
          console.log(blue_player);
        }
        break;
      case "Spy":
        if (current_player === "red") {
          red_player = pieces[13];
          red_player_piece.textContent = "PLAYER CHOSEN";
          console.log(red_player);
        } else {
          blue_player = pieces[13];
          blue_player_piece.textContent = "PLAYER CHOSEN";
          console.log(blue_player);
        }
        break;
      case "Flag":
        if (current_player === "red") {
          red_player = pieces[14];
          red_player_piece.textContent = "PLAYER CHOSEN";
          console.log(red_player);
        } else {
          blue_player = pieces[14];
          blue_player_piece.textContent = "PLAYER CHOSEN";
          console.log(blue_player);
        }
        break;
      default:
        console.log("Unknown piece chosen");
    }
  }

  const buttons = document.querySelectorAll(".game-button");

  buttons.forEach((button) => {
    button.addEventListener("click", choosePiece);
  });
});

function fight() {
  if (
    red_player === undefined ||
    blue_player === undefined ||
    red_player === null ||
    blue_player === null
  ) {
    alert("Choose a Piece");
  }

  if (Number(red_player.power) === Number(blue_player.power)) {
    console.log(red_player);
    console.log(blue_player);
    whoWins.textContent = "Draw";

    reset();
  } else {
    if (Number(red_player.power) > Number(blue_player.power)) {
      if (red_player.piece !== "Spy") {
        victor = red_player.piece + " Red Player";
        whoWins.textContent = "Red Wins";
        reset();
      } else {
        if (blue_player.piece === "Private") {
          victor = blue_player.piece + " Blue Player";
          whoWins.textContent = "Blue Wins";
          reset();
        } else {
          victor = red_player.piece + " Red Player";
          whoWins.textContent = "Red Wins";
          reset();
        }
      }
    } else if (Number(red_player.power) < Number(blue_player.power)) {
      if (blue_player.piece !== "Spy") {
        victor = blue_player.piece + " Blue Player";
        whoWins.textContent = "Blue Wins";
        reset();
      } else {
        if (red_player.piece === "Private") {
          victor = red_player.piece + " Red Player";
          whoWins.textContent = "Red Wins";
          reset();
        } else {
          victor = blue_player.piece + " Blue Player";
          whoWins.textContent = "Blue Wins";
          reset();
        }
      }
    } else {
      victor = "Draw";
    }
  }
}
console.log("Duel Victor: " + victor);

function resetPieces() {
  red_player = null;
  blue_player = null;

  red_player_piece.textContent = "CHOOSING";
  blue_player_piece.textContent = "CHOOSE";
  whoWins.textContent = "Who Wins?";
  choosing_red();
}

function reset() {
  red_player = null;
  blue_player = null;

  red_player_piece.textContent = "CHOOSING";
  blue_player_piece.textContent = "CHOOSE";

  choosing_red();
}
