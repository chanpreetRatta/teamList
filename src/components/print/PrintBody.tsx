import type { Player } from "../types";

interface Props {
  players: Player[];
}

const Print = ({ players }: Props) => {
  return (
    <>
      <div className="row">
        <div className="col-1">No.</div>
        <div className="col-3">Last Name</div>
        <div className="col-3">First Name</div>
        <div className="col-3">BCMCL ID</div>
        <div className="col-2">Junior</div>
      </div>

      {players.map((player, index) => (
        <div className="row" key={player["CC Player Id"]}>
          <div className="col-1">{index + 1}</div>
          <div className="col-3">{player["Player Name"].split(" ")[1]}</div>
          <div className="col-3">{player["Player Name"].split(" ")[0]}</div>
          <div className="col-3">{player["CC Player Id"]}</div>
          <div className="col-2">N</div>
        </div>
      ))}
    </>
  );
};

export default Print;
