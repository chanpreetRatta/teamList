interface Props {
  children: string;
}

const Header = ({ children }: Props) => {
  const [day, month] = [
    new Date().getDate(),
    new Date().toLocaleString("default", { month: "long" }),
  ];

  return (
    <span className="d-flex justify-content-between align-items-center mb-5">
      <h2>{children}</h2>

      <p>{`${day} ${month}`}</p>
    </span>
  );
};

export default Header;
