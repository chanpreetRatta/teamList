interface Props {
  totalPlayers: number;
}

const PrintButton = ({ totalPlayers }: Props) => {
  console.log(totalPlayers);
  return (
    <button className="print-button mt-4 align-self-end" disabled>
      Print
    </button>
  );
};

export default PrintButton;
