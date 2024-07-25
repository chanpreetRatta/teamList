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

function renderPlayerList(list, target, action) {
  //this function will take an list on array, then render it to a target.
  // action method is to decide should we add a delete button or add button at the end of the card
  target.innerHTML = "";
  list.forEach((item) => {
    const playerName = document.createElement("div");
    const playerId = document.createElement("div");
    const playerAction = document.createElement("div");
    const playerCard = document.createElement("div");

    playerName.classList.add("player-name");
    playerId.classList.add("player-id");
    playerAction.classList.add(action);
    playerAction.classList.add("selecting");
    playerCard.classList.add("player-card");

    playerName.textContent = item["Player Name"];
    playerId.textContent = item["CC Player Id"];

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

  let index = playersListArray.indexOf(player);
  playersListArray.splice(index, 1);
  console.log(playersListArray);

  selectedPlayer.push(player);

  renderPlayerList(playersListArray, playersListContainer, "add");
  renderPlayerList(selectedPlayer, selectedPlayersContainer, "delete");
}

//fetch the list of the players and spread the array into playerListArray
fetchPlayer(
  "./6th Division North Vancouver III - British Columbia Mainland Cricket League.json"
).then((player) => {
  playersListArray = [...player];
  renderPlayerList(playersListArray, playersListContainer, "add");
});

// event listener to select the players from the selecting list
playersListContainer.addEventListener("click", selectPlayer);
