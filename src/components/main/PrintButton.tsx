interface Props {
  totalPlayers: number;
}

const PrintButton = ({ totalPlayers }: Props) => {
  console.log(totalPlayers);
  return (
    <button
      className="btn btn-success print-button"
      disabled={totalPlayers < 9 || totalPlayers > 12}
    >
      Print
    </button>
  );
};

export default PrintButton;
