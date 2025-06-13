import Header from "../main/Header";

const GroundInputForm = () => {
  return (
    <>
      <Header>Enter Ground and Teams Information</Header>
      <div className="d-flex  justify-content-center gap-5">
        <form className="w-75">
          <div className="form-group mb-4">
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" id="date" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="match">Match Number</label>
            <input type="match" className="form-control" id="match" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="division">Division</label>
            <input type="division" className="form-control" id="division" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="home">Home</label>
            <input type="home" className="form-control" id="home" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="away">Away</label>
            <input type="away" className="form-control" id="away" />
          </div>
          <button className="add">Submit</button>
        </form>
      </div>
    </>
  );
};

export default GroundInputForm;
