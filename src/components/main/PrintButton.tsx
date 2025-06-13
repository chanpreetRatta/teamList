import { Link } from "react-router-dom";

interface Props {
  totalPlayers: number;
}

const PrintButton = ({ totalPlayers }: Props) => {
  return (
    <div className="row justify-content-end">
      <button
        className="col-1 btn btn-success print-button"
        disabled={totalPlayers < 9}
      >
        <Link to={"/input"}> Next</Link>
      </button>
    </div>
  );
};

export default PrintButton;
