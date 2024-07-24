const playersListContainer = document.querySelector(".players-list");
const selectedPlayersContainer = document.querySelector(
  ".selected-players-list"
);

let playersListArray = [];
let selectedPlayer = [];
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

function renderPlayerList(list, target) {
  target.innerHTML = "";
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
    target.append(playerCard);
  });
}

function selectPlayer(event) {
  let selectingPlayerCard = event.target.parentElement;
  if (selectingPlayerCard.classList[0] !== "player-card") return;

  let player = playersListArray.find(
    (card) => card["Player Name"] === selectingPlayerCard.children[0].innerHTML
  );

  selectedPlayer.push(player);
  renderPlayerList(selectedPlayer, selectedPlayersContainer);
}

//fetch the list of the players and spread the array into playerListArray
fetchPlayer(
  "./6th Division North Vancouver III - British Columbia Mainland Cricket League.json"
).then((player) => {
  playersListArray = [...player];
  renderPlayerList(playersListArray, playersListContainer);
});

// event listener to select the players from the selecting list
playersListContainer.addEventListener("click", selectPlayer);
