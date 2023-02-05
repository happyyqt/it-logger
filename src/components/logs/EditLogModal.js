import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { clearCurrent, updateLog } from "../../actions/logActions";
import PropTypes from "prop-types";
import TechSelectOptions from "../techs/TechSelectOptions";

const EditLogModal = ({ log, clearCurrent, updateLog }) => {
  const { current } = log;
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(true);
  const [tech, setTech] = useState("");
  // fill all the fields with current log;
  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const updatedLog = {
        message: message,
        attention: attention,
        tech: tech,
        date: new Date(),
        id: current.id,
      };
      updateLog(updatedLog);
      //clear fields
      clearCurrent();
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };
  return (
    <div
      id="edit-log-modal"
      className="modal"
      style={{ width: "75%", height: "75%" }}
    >
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="tech_logs"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Please Choose Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <p>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={attention}
                value={attention}
                onChange={(e) => setAttention(!attention)}
              />
              <span>Needs Attention</span>
            </label>
          </p>
        </div>
        <div className="modal-footer">
          <form onSubmit={onSubmit}>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  log: PropTypes.object.isRequired,
  clearCurrent: PropTypes.func.isRequired,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { clearCurrent, updateLog })(
  EditLogModal
);
