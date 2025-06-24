import type { Player } from "../types";

interface Props {
  players: Player[];
}

const Print = ({ players }: Props) => {
  return (
    <>
      <div className="row">
        <div className="col">No.</div>
        <div className="col-4">Last Name</div>
        <div className="col-4">First Name</div>
        <div className="col-2">BCMCL ID</div>
        <div className="col">Junior</div>
      </div>

      {players.map((player, index) => (
        <div className="row" key={player["CC Player Id"]}>
          <div className="col">{index + 1}</div>
          <div className="col-4">{player["Player Name"].split(" ")[1]}</div>
          <div className="col-4">{player["Player Name"].split(" ")[0]}</div>
          <div className="col-2">{player["CC Player Id"]}</div>
          <div className="col">N</div>
        </div>
      ))}
    </>
  );
};

export default Print;
