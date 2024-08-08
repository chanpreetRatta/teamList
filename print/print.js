const form = document.querySelector(".pop-up-window-form");
const formContainer = document.querySelector(".pop-up-window");
const container = document.querySelectorAll(".container");
const selectedPlayers = JSON.parse(localStorage.getItem("selectedPlayersList"));
const formData = {};

function submitTheForm(event) {
  event.preventDefault();

  formContainer.classList.add("hide-me");
  container.forEach((div) => div.classList.remove("hide-me"));

  formData.date = document.getElementById("date").value;
  formData.matchNumber = document.getElementById("matchNumber").value;
  formData.division = document.getElementById("division").value;
  formData.ground = document.getElementById("ground").value;
  formData.homeTeam = document.getElementById("homeTeam").value;
  formData.awayTeam = document.getElementById("awayTeam").value;
  renderThePage(formData, selectedPlayers);
}

function renderThePage(formData, selectedPlayers) {
  const header = document.createElement("div");
  header.classList.add("header");

  header.append(makeCell(`Date: ${formData.date}`));
  header.append(makeCell(`Match: ${formData.matchNumber}`));
  header.append(makeCell(`Division: ${formData.division}`));
  header.append(makeCell(`Ground: ${formData.ground}`));

  const secondRow = document.createElement("div");
  secondRow.classList.add("second-row");

  secondRow.append(makeCell(`Home Team: ${formData.homeTeam}`));
  secondRow.append(makeCell(`Away Team: ${formData.awayTeam}`));

  const containerBody = document.createElement("div");
  containerBody.classList.add("container-body");

  const containerBodyHeader = document.createElement("div");
  containerBodyHeader.classList.add("container-body-header");

  containerBodyHeader.append(makeCell("No."));
  containerBodyHeader.append(makeCell("Last Name"));
  containerBodyHeader.append(makeCell("First Name"));
  containerBodyHeader.append(makeCell("BCMCL ID"));
  containerBodyHeader.append(makeCell("Junior"));

  containerBody.append(containerBodyHeader);

  //this loop will get the players list as a argument, then spread them into the body of the container
  let counter = 1;
  selectedPlayers.forEach((player) => {
    let containerBodyRow = document.createElement("div");
    containerBodyRow.classList.add("container-header-row");

    containerBodyRow.append(makeCell(counter));
    containerBodyRow.append(
      makeCell(`${addRole(counter)}  ${player["Player Name"].split(" ")[1]} `)
    );
    containerBodyRow.append(makeCell(player["Player Name"].split(" ")[0]));
    containerBodyRow.append(makeCell(player["CC Player Id"]));
    containerBodyRow.append(makeCell(" "));

    containerBody.append(containerBodyRow);
    counter++;
  });

  container.forEach((section) => {
    section.append(
      header.cloneNode(true),
      secondRow.cloneNode(true),
      containerBody.cloneNode(true)
    );
  });
}

function makeCell(data) {
  let div = document.createElement("div");
  div.classList.add("cell");

  div.append(document.createTextNode(data));

  return div;
}

function addRole(counter) {
  if (counter === 1) return "(C)";
  else if (counter === 2) return "(VC)";
  else if (counter === 3) return "(WK)";

  return "";
}
form.addEventListener("submit", submitTheForm);
