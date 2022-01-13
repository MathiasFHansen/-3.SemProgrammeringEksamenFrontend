import React, { useEffect, useState } from "react";

export default function CarsFromRace(props) {
  const [car, setCar] = useState([]);
  const [raceID, setRaceID] = useState("");
  const [query, setQuery] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(true);
      
    
    //setLogin(initialState);
  };

  useEffect(() => {  
      if(!query) return;   
    fetch(
      `http://localhost:8080/3__semester_eksamen/api/RaceCarInfo/carsFromRace/${raceID}`
    )
      .then((res) => res.json())
      .then((data) => {
        let tempArray = [];
        data.forEach((element) => {
          const newCar = {
            name: element.name,
            brand: element.brand,
            model: element.model,
            year: element.year,
          };

          tempArray.push(newCar);
        });
        setCar(tempArray);
      });
  }, []);

  <div key={car}>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Brand</th>
          <th scope="col">Model</th>
          <th scope="col">Year</th>
        </tr>
      </thead>
      <tbody>
        {car.map((currentCar) => (
          <tr>
            <td>{currentCar.name}</td>
            <td>{currentCar.brand}</td>
            <td>{currentCar.model}</td>
            <td>{currentCar.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>;

  const changeID = (event) => {
    //console.log([event.target.name])
    setRaceID(event.target.value);
  };

  return (
    <div className="col-xs-1" align="center">
      <h2>See Cars Participating in race based on race ID number</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Race ID:
          <br />
          <input type="text" name="rid" value={raceID} onChange={changeID} />
        </label>
        <br />
        <br />
        <button type="submit">See Cars</button>
      </form>
    </div>
  );
}
