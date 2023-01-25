import React, { useState, useEffect } from "react";
import Techitem from "./Techitem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = () => {
    setLoading(true);
    fetch("/techs")
      .then((response) => response.json())
      .then((data) => setTechs(data));
    setLoading(false);
  };
  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Techs</h4>
        <ul className="collection">
          {!loading && techs.length === 0 ? (
            <div> No techs are found</div>
          ) : (
            techs.map((tech) => <Techitem tech={tech} key={tech.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
