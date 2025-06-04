import type { Player } from "./types";

interface Props {
  playersList: Player[];
}

const PlayerList = ({ playersList }: Props) => {
  return (
    <ul className="list-group flex-fill p-2">
      {playersList.map((player) => (
        <li
          className="list-group-item d-flex justify-content-between"
          key={player["CC Player Id"]}
        >
          {player["Player Name"]}
          <div className="add">Add</div>
        </li>
      ))}
    </ul>
  );
};

export default PlayerList;
