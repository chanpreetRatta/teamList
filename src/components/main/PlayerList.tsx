import type { Player } from "../types";

interface Props {
  playersList: Player[];
  selectPlayer: (player: Player) => void;
  totalPlayers: number;
}

const PlayerList = ({ playersList, selectPlayer, totalPlayers }: Props) => {
  return (
    <div className="col-sm  h-100 overflow-auto">
      <h3>Total Available Players - {totalPlayers}</h3>

      <ul className="list-group">
        {playersList.map((player) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={player["CC Player Id"]}
          >
            {player["Player Name"]}
            <div className="add" onClick={() => selectPlayer(player)}>
              ADD
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
