const playerContainer = document.querySelector(".selecting-players-container");
let playersListArray = [];
async function fetchPlayer(url) {
  let playersList;
  try {
    let response = await fetch(url);

    playersList = await response.json();
  } catch (error) {
    return error;
  }

  return playersList;
}

function renderPlayerList(list) {
  list.forEach((item) => {
    const playerName = document.createElement("div");
    const playerId = document.createElement("div");
    const playerAction = document.createElement("div");
    const playerCard = document.createElement("div");

    playerName.classList.add("player-name");
    playerId.classList.add("player-id");
    playerAction.classList.add("player-action");
    playerAction.classList.add("selecting");
    playerCard.classList.add("player-card");

    playerName.textContent = item["Player Name"];
    playerId.textContent = item["CC Player Id"];
    playerAction.textContent = "a";

    playerCard.append(playerName, playerId, playerAction);
    playerContainer.append(playerCard);
  });
}

//fetch the list of the players and spread the array into playerListArray
fetchPlayer(
  "./6th Division North Vancouver III - British Columbia Mainland Cricket League.json"
).then((player) => {
  playersListArray = [...player];
  renderPlayerList(playersListArray);
});

// event listener to select the players from the selecting list
//playerContainer.addEventListener("click", selectPlayer);
