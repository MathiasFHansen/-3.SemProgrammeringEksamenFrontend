import React, { useState, useEffect } from "react";

export default function NewRace(props){

  const initialState = { name: "", date: "", time: "", location: ""};
  const [raceName, setRaceName] = useState(initialState.name);
  const [raceDate, setRaceDate] = useState(initialState.date);
  const [raceTime, setRaceTime] = useState(initialState.time);
  const [raceLocation, setRaceLocation] = useState(initialState.location);
 

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ name: raceName, date: raceDate, time: raceTime, location: raceLocation })
      };
      fetch('https://www.mathias-filten-borg.dk/3.semesterEksamen/api/RaceCarInfo/newRace',requestOptions)
      
    
    //setLogin(initialState);
  };

  const changeName = (event) => {
    //console.log([event.target.name])
    setRaceName(
        event.target.value,
    );

};

const changeDate = (event) => {
    //console.log([event.target.name])
    setRaceDate(event.target.value,
    );

};

const changeTime = (event) => {
    //console.log([event.target.name])
    setRaceTime(
        event.target.value,
    );
};

const changeLocation = (event) => {
    //console.log([event.target.name])
    setRaceLocation(event.target.value,
    );

};

return (
    <div className="col-xs-1" align="center">
      <h2>NewRace</h2>
      
        <form onSubmit={handleSubmit}>
          <label>
            Race Name:
            <br />
            <input
              type="text"
              name="name"
              value={raceName}
              onChange={changeName}
            />
            <br />
            Date:
            <br />
            <input
              type="text"
              name="date"
              value={raceDate}
              onChange={changeDate}
            />
            <br />
            Time:
            <br />
            <input
              type="text"
              name="Time"
              value={raceTime}
              onChange={changeTime}
            />
            <br />
            Location:
            <br />
            <input
              type="text"
              name="date"
              value={raceLocation}
              onChange={changeLocation}
            />
          </label>
          <br />
          <br />
          <button type="submit">Create Race</button>
        </form>
    </div>
  )};
