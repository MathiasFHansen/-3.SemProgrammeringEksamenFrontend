import React, { useState, useEffect } from "react";

export default function DeleteCar(props) {
  const [carID, setCarID] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `https://www.mathias-filten-borg.dk/3.semesterEksamen/api/RaceCarInfo/deleteCar/${carID}`
    );

    //setLogin(initialState);
  };

  const changeID = (event) => {
    //console.log([event.target.name])
    setCarID(event.target.value);
  };

  return (
    <div className="col-xs-1" align="center">
      <h2>Delete Car</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Car id
          <br />
          <input type="text" name="name" value={carID} onChange={changeID} />
          <br />
        </label>
        <br />
        <br />
        <button type="submit">Delete Car</button>
      </form>
    </div>
  );
}
