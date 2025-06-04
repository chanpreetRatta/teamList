import { useState } from "react";
import PlayerList from "./PlayerList";
import SelectedPlayers from "./SelectedPlayers";

const Body = () => {
  const [playersList, setPlayersList] = useState([
    {
      "CC Player Id": 1241972,
      "Player Name": "Syril Gakhar",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": 24,
    },
    {
      "CC Player Id": 1592470,
      "Player Name": "Daler Gill",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": 95,
    },
    {
      "CC Player Id": 2137274,
      "Player Name": "Chanpreet Ratta",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": 37,
    },
  ]);
  const [selectedPlayers, setSelectedPlayers] = useState([
    {
      "CC Player Id": 1241972,
      "Player Name": "Syril Gakhar",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": 24,
    },
    {
      "CC Player Id": 1592470,
      "Player Name": "Daler Gill",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": 95,
    },
    {
      "CC Player Id": 2137274,
      "Player Name": "Chanpreet Ratta",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": 37,
    },
  ]);
  return (
    <div className="body-container d-flex">
      <PlayerList playersList={playersList}></PlayerList>
      <SelectedPlayers playerList={selectedPlayers}></SelectedPlayers>
    </div>
  );
};

export default Body;
