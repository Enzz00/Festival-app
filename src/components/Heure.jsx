import { useState } from "react";

export function Heure({ setMinHeure, setMaxHeure }) {

  const [showLinks, setShowLinks] = useState(false);
  const [cross, setCross] = useState(false);
  const [minHeure, setMinHeureLocal] = useState("0");
  const [maxHeure, setMaxHeureLocal] = useState("10");

  const handleShowlinks = () => {
    setShowLinks(!showLinks);
    crossToggle();
  };

  const crossToggle = () => {
    setCross(!cross);
  };

  const handleMinHeure = (e) => {
    setMinHeureLocal(e.target.value);
    setMinHeure(e.target.value);
  };

  const handleMaxHeure = (e) => {
    setMaxHeureLocal(e.target.value);
    setMaxHeure(e.target.value);
  };

  return (
    <div>
      <div className='prix'>
        <div className='ButtonToggleContent'>
          <h2>Heure </h2>
          <span className={`cross ${cross ? "cross" : "hiddencross"}`} onClick={handleShowlinks}></span>
        </div>
        <div className={`Prixlabel ${showLinks ? "Prixlabel" : "hidden-Prixlabel"}`}>
          <div>
            <label >Date Min</label>
            <input
              placeholder='0'
              type="time"
              min={0}
              max={31}
              className="InputPageContent"
              value={minHeure}
              onChange={handleMinHeure}
            ></input>
          </div>
          <div>
            <label >Date Max</label>
            <input
              placeholder='10'
              type="time"
              min={0}
              max={31}
              className="InputPageContent"
              value={maxHeure}
              onChange={handleMaxHeure}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}