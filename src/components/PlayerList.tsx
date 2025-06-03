type Player = {
  "CC Player Id": number;
  "Player Name": string;
  "Series And Division": string;
  "Team Name": string;
  "Jersey Number": number;
};

interface Props {
  playersList: Player[];
}

const PlayerList = ({ playersList }: Props) => {
  return (
    <ul className="list-group">
      {playersList.map((player) => (
        <li className="list-group-item" key={player["CC Player Id"]}>
          {player["Player Name"]}
        </li>
      ))}
    </ul>
  );
};

export default PlayerList;
