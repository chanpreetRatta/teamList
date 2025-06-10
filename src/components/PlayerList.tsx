import type { Player } from "./types";

interface Props {
  playersList: Player[];
  selectPlayer: (player: Player) => void;
  totalPlayers: number;
}

const PlayerList = ({ playersList, selectPlayer, totalPlayers }: Props) => {
  return (
    <div className="flex-fill p-2 overflow-scroll">
      <h3>Total Players - {totalPlayers}</h3>

      <ul className="list-group player-list ">
        {playersList.map((player) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={player["CC Player Id"]}
          >
            {player["Player Name"]}
            <div className="add" onClick={() => selectPlayer(player)}>
              Add
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
