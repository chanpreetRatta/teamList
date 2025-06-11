import type { Player } from "../types";

interface Props {
  playerList: Player[];
  deletePlayer: (player: Player) => void;
  totalPlayers: number;
}

const SelectedPlayers = ({ playerList, deletePlayer, totalPlayers }: Props) => {
  const messages = [
    "Select the captain first",
    "Then Select the vice-captain",
    "Then Select the Wicket Keeper",
    "Then Select the rest of the team",
  ];
  return (
    <div className="flex-fill p-2 overflow-scroll">
      <h3>Total Selected Players - {totalPlayers}</h3>

      {playerList.length === 0 && (
        <ul className="list-group">
          {messages.map((message) => (
            <li className="list-group-item" key={message}>
              {message}
            </li>
          ))}
        </ul>
      )}

      <div className="selected-players d-flex flex-column justify-content-between">
        <ul className=" list-group ">
          {playerList.map((player) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={player["CC Player Id"]}
            >
              {player["Player Name"]}
              <div className="attribute d-flex">
                <div
                  className="vice-captain me-1"
                  onClick={() => deletePlayer(player)}
                >
                  Del
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectedPlayers;
