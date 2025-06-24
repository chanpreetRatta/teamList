import { useEffect, useState } from "react";
import PlayerList from "./PlayerList";
import SelectedPlayers from "./SelectedPlayers";
import services from "../../services/services";
import type { Player } from "../types";
import PrintButton from "./PrintButton";

const Body = () => {
  const [playersList, setPlayersList] = useState<Player[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const { request } = services.getAllPlayers();
    request
      .then((res) => setPlayersList(res.data))
      .catch((err) => setErrors(err.message));
  }, []);

  const handlePlayersSelection = (player: Player) => {
    const selected = [...selectedPlayers, player];
    const list = playersList.filter((i) => i !== player);

    setSelectedPlayers(selected);
    setPlayersList(list);
    localStorage.setItem("teamList", JSON.stringify(selected));
  };

  const handleDeletePlayer = (player: Player) => {
    const deleted = [...playersList, player];
    const selected = selectedPlayers.filter((i) => i !== player);

    setPlayersList(deleted);
    setSelectedPlayers(selected);

    localStorage.setItem("teamList", JSON.stringify(selected));
  };

  if (errors) return <div className="text-danger">{errors}</div>;

  return (
    <>
      <div className="container">
        <div className="row first-row-body overflow-scroll">
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
        <div className="row pt-4">
          <PrintButton totalPlayers={selectedPlayers.length}></PrintButton>
        </div>
      </div>
    </>
  );
};

export default Body;
