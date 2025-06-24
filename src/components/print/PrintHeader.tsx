import type { GroundFormInputs } from "../types";

interface Props {
  groundInfo: GroundFormInputs;
}

export const PrintHeader = ({ groundInfo }: Props) => {
  return (
    <>
      <p>British Columbia Mainland Cricket League (BCMCL) - Team List</p>
      <div className="row header-one">
        <div className="col">{groundInfo.date}</div>

        <div className="col">Match: {groundInfo.matchNumber}</div>

        <div className="col">Division: {groundInfo.division}</div>
        <div className="col">Ground: Inter River</div>
      </div>
      <div className="row">
        <div className="col">Home Team: {groundInfo.home}</div>

        <div className="col">Away Team: {groundInfo.away}</div>
      </div>
    </>
  );
};
