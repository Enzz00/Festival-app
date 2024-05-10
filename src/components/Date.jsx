import { useState } from "react";

export function Date({ setMinDate, setMaxDate }) {

  const [showLinks, setShowLinks] = useState(false);
  const [cross, setCross] = useState(false);
  const [minDate, setMinDateLocal] = useState("0");
  const [maxDate, setMaxDateLocal] = useState("31-");

  const handleShowlinks = () => {
    setShowLinks(!showLinks);
    crossToggle();
  };

  const crossToggle = () => {
    setCross(!cross);
  };

  const handleMinDate = (e) => {
    setMinDateLocal(e.target.value);
    setMinDate(e.target.value);
  };

  const handleMaxDate = (e) => {
    setMaxDateLocal(e.target.value);
    setMaxDate(e.target.value);
  };

  return (
    <div>
      <div className='prix'>
        <div className='ButtonToggleContent'>
          <h2>Dates </h2>
          <span className={`cross ${cross ? "cross" : "hiddencross"}`} onClick={handleShowlinks}></span>
        </div>
        <div className={`Prixlabel ${showLinks ? "Prixlabel" : "hidden-Prixlabel"}`}>
          <div>
            <label >Date Min</label>
            <input
              placeholder='0'
              type="number"
              min={0}
              max={31}
              className="InputPageContent"
              value={minDate}
              onChange={handleMinDate}
            ></input>
          </div>
          <div>
            <label >Date Max</label>
            <input
              placeholder='31'
              type="number"
              min={0}
              max={31}
              className="InputPageContent"
              value={maxDate}
              onChange={handleMaxDate}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}