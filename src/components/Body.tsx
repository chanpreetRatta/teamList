import { useEffect, useState } from "react";
import PlayerList from "./PlayerList";
import SelectedPlayers from "./SelectedPlayers";
import getPlayers from "../services/api-client";
import type { Player } from "./types";
import PrintButton from "./PrintButton";

const Body = () => {
  const [playersList, setPlayersList] = useState<Player[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    getPlayers()
      .then((res) => setPlayersList(res))
      .catch((err) => setErrors(err));
  }, []);

  const handlePlayersSelection = (player: Player) => {
    setSelectedPlayers([...selectedPlayers, player]);
    setPlayersList(playersList.filter((i) => i !== player));
  };

  const handleDeletePlayer = (player: Player) => {
    setPlayersList([...playersList, player]);
    setSelectedPlayers(selectedPlayers.filter((i) => i !== player));
  };

  return (
    <>
      <div className="body-container d-flex justify-content-between">
        <PlayerList
          playersList={playersList}
          selectPlayer={(player: Player) => handlePlayersSelection(player)}
          totalPlayers={playersList.length}
        ></PlayerList>
        <SelectedPlayers
          playerList={selectedPlayers}
          deletePlayer={(player: Player) => handleDeletePlayer(player)}
          totalPlayers={selectedPlayers.length}
        ></SelectedPlayers>
      </div>
      <PrintButton totalPlayers={selectedPlayers.length}></PrintButton>
    </>
  );
};

export default Body;
