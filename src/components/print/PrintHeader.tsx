import type { GroundFormInputs } from "../types";

interface Props {
  groundInfo: GroundFormInputs;
}

export const PrintHeader = ({ groundInfo }: Props) => {
  console.log(groundInfo.away);
  return (
    <>
      <p>British Columbia Mainland Cricket League (BCMCL) - Team List</p>
      <div className="row header-one">
        <div className="col-2">{groundInfo.date}</div>

        <div className="col-2">Match: {groundInfo.matchNumber}</div>

        <div className="col-2">Division: {groundInfo.division}</div>
        <div className="col-6">Ground: {groundInfo.ground}</div>
      </div>
      <div className="row">
        <div className="col">Home Team: {groundInfo.home}</div>

        <div className="col">Away Team: {groundInfo.away}</div>
      </div>
    </>
  );
};
