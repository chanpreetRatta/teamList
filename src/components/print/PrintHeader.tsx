import type { GroundFormInputs } from "../types";

interface Props {
  groundInfo: GroundFormInputs;
}

export const PrintHeader = ({ groundInfo }: Props) => {
  return (
    <>
      <p>British Columbia Mainland Cricket League (BCMCL) - Team List</p>
      <div className="row">
        <div className="col">Date</div>
        <div className="col-2">{groundInfo.date}</div>
        <div className="col-2">Match No.</div>
        <div className="col">{groundInfo.matchNumber}</div>
        <div className="col">Division</div>
        <div className="col">{groundInfo.division}</div>
        <div className="col">Ground</div>
        <div className="col-4">Inter River</div>
      </div>
      <div className="row">
        <div className="col">Home Team</div>
        <div className="col-4">{groundInfo.home}</div>
        <div className="col">Away Team</div>
        <div className="col-4">{groundInfo.away}</div>
      </div>
    </>
  );
};
