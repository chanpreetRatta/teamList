// Define a TypeScript interface for the component's props
// The component expects a single prop called `children`, which should be a string
interface Props {
  children: string;
}

// Define a functional React component called Header
// It accepts `children` as a prop, which will typically be used as a heading title
const Header = ({ children }: Props) => {
  // Extract the current day of the month and the full name of the current month
  const [day, month] = [
    new Date().getDate(), // Get current day of the month (1-31)
    new Date().toLocaleString("default", { month: "long" }), // Get current month as a full name (e.g., "June")
  ];

  // Render the component UI
  return (
    // Use a <span> as a flex container to layout the heading and date horizontally
    <span className="d-flex justify-content-between align-items-center mb-5">
      {/* Render the children prop as an <h2> heading */}
      <h2>{children}</h2>
      {/* Display the current day and month in a <p> tag */}
      <p>{`${day} ${month}`}</p>
    </span>
  );
};

// Export the Header component for use in other parts of the application
export default Header;
