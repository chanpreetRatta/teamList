import { useNavigate } from "react-router-dom";

interface Props {
  totalPlayers: number;
}

const PrintButton = ({ totalPlayers }: Props) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/input", { state: totalPlayers });
  };
  return (
    <div className="row justify-content-end">
      <button
        className="col-1 btn btn-success print-button"
        disabled={totalPlayers < 9}
        onClick={handleSubmit}
      >
        Next
      </button>
    </div>
  );
};

export default PrintButton;
