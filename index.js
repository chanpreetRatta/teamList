const playerContainer = document.querySelector(".selecting-players-container");
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

let playersListArray = fetchPlayer(
  "./6th Division North Vancouver III - British Columbia Mainland Cricket League.json"
);

playersListArray.then((player) => {
  player.forEach((item) => {
    const playerName = document.createElement("div");
    const playerId = document.createElement("div");
    const playerCard = document.createElement("div");

    playerName.classList.add("player-name");
    playerId.classList.add("player-id");
    playerCard.classList.add("player-card");

    playerName.textContent = item["Player Name"];
    playerId.textContent = item["CC Player Id"];

    playerCard.append(playerName, playerId);
    playerContainer.append(playerCard);
  });
});
