import React, { useState, useEffect } from "react";
import Techitem from "./Techitem";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";
import PropTypes from "prop-types";

const TechListModal = ({ techs, loading, getTechs }) => {
  // const { techs, loading } = tech;
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Techs</h4>
        <ul className="collection">
          {loading || !techs ? (
            <h2>No Techs available</h2>
          ) : (
            techs.map((tech) => <Techitem tech={tech} key={tech.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  techs: state.tech.techs,
  loading: state.tech.loading,
});
export default connect(mapStateToProp, { getTechs })(TechListModal);
