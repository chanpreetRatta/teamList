interface Props {
  totalPlayers: number;
}

const PrintButton = ({ totalPlayers }: Props) => {
  return (
    <div className="row justify-content-end">
      <button
        className="col-1 btn btn-success print-button"
        disabled={totalPlayers < 9 || totalPlayers > 12}
      >
        Print
      </button>
    </div>
  );
};

export default PrintButton;
