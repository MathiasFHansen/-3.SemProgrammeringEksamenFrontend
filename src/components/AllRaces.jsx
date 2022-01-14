import React, { useEffect, useState } from "react";

export default function AllRaces(props) {
    const [race, setRace] = useState([]);
    useEffect(() => {
        fetch("https://www.mathias-filten-borg.dk/3.semesterEksamen/api/RaceCarInfo/Races")
          .then((res) => res.json())
          .then((data) => {
            let tempArray = [];  
            data.forEach((element) => {
              const newRace = {
                name: element.name,
                date: element.date,
                time: element.time,
                location: element.location,
              };
              let tempt = race;
              tempArray.push(newRace);
              
            });
            setRace(tempArray);
          });
      }, []);

    return (
        <div key={race}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {race.map((currentRace) => (
                    <tr key={currentRace.name}>
                        <td>{currentRace.name}</td>
                        <td>{currentRace.date}</td>
                        <td>{currentRace.time}</td>
                        <td>{currentRace.location}</td>
                    </tr>    
                    ))}
                </tbody>        
            </table>    
        </div>    
    )
}