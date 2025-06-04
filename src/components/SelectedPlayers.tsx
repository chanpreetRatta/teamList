import PrintButton from "./PrintButton";
import type { Player } from "./types";

interface Props {
  playerList: Player[];
}

const SelectedPlayers = ({ playerList }: Props) => {
  return (
    <div className="selected-players flex-fill p-2 d-flex flex-column justify-content-between">
      <ul className=" list-group ">
        {playerList.map((player) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={player["CC Player Id"]}
          >
            {player["Player Name"]}
            <div className="attribute d-flex">
              <div className="captain me-1">C</div>
              <div className="vice-captain me-1">VC</div>
              <div className="wicketkeeper me-1">WK</div>
            </div>
          </li>
        ))}
      </ul>
      <PrintButton></PrintButton>
    </div>
  );
};

export default SelectedPlayers;
