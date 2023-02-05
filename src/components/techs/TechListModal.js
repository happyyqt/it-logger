import React, { useEffect } from "react";
import Techitem from "./Techitem";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";
import PropTypes from "prop-types";

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Techs</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => <Techitem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProp, { getTechs })(TechListModal);
