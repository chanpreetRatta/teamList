import { useForm } from "react-hook-form";
import Header from "../main/Header";
import { useNavigate } from "react-router-dom";
import type { GroundFormInputs } from "../types";

const GroundInputForm = () => {
  const navigator = useNavigate();
  const onSubmit = (info: GroundFormInputs) => {
    console.log(info);
    localStorage.setItem("groundInfo", JSON.stringify(info));
    navigator("/print");
  };

  const { register, handleSubmit } = useForm<GroundFormInputs>();

  return (
    <>
      <Header>Enter Ground and Teams Information</Header>
      <div className="d-flex  justify-content-center gap-5">
        <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-4">
            <label htmlFor="date">Date</label>
            <input
              {...register("date")}
              type="date"
              className="form-control"
              id="date"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="match">Match Number</label>
            <input
              {...register("matchNumber")}
              type="number"
              className="form-control"
              id="match"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="division">Division</label>
            <input
              {...register("division")}
              type="text"
              className="form-control"
              id="division"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="home">Home</label>
            <input
              {...register("home")}
              type="text"
              className="form-control"
              id="home"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="away">Away</label>
            <input
              {...register("away")}
              type="text"
              className="form-control"
              id="away"
            />
          </div>
          <button className="add">Submit</button>
        </form>
      </div>
    </>
  );
};

export default GroundInputForm;
