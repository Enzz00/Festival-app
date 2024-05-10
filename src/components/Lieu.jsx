import { useState } from "react";

export function Lieu({ setMinLieux, setMaxLieux }) {

  const [showLinks, setShowLinks] = useState(false);
  const [cross, setCross] = useState(false);

  const handleShowlinks = () => {
    setShowLinks(!showLinks);
    crossToggle();
  };

  const crossToggle = () => {
    setCross(!cross);
  };


  return (
    <div>
      <div className='prix'>
        <div className='ButtonToggleContent'>
          <h2>Lieu </h2>
          <span className={`cross ${cross ? "cross" : "hiddencross"}`} onClick={handleShowlinks}></span>
        </div>
        <div className={`Prixlabel ${showLinks ? "Prixlabel" : "hidden-Prixlabel"}`}>
          <div>
            <input
              placeholder=''
              type="text"
              className="InputPageContent"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}