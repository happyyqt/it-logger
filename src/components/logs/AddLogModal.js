import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";
import TechOptions from "../techs/TechOptions";
import PropTypes from "prop-types";

const AddLogModal = ({ techs, addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(true);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      console.log(message, attention, tech);
      // clear fields
      // generate time and id
      const newLog = {
        message: message,
        attention: attention,
        tech: tech,
        date: new Date(),
      };

      addLog(newLog);
      M.toast({ html: `Log added by {tech}` });
      // clear states
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };
  return (
    <div
      id="add-log-modal"
      className="modal"
      style={{ width: "75%", height: "75%" }}
    >
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Placeholder"
              id="tech_logs"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="tech_logs">Tech Logs</label>
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
              <TechOptions techs={techs} />
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};
// state.log / state.tech should be consistent to "log: logReducer, tech: techReducer" in reducers/index.js,
const mapStateToProp = (state) => ({
  techs: state.tech.techs,
});
// state variables are all put in mapStateToProp object, actions are put in a brasket.
// Both state variables and actions are treated as props of function AddLogModal so we use ({}) at the beginning
export default connect(mapStateToProp, { addLog })(AddLogModal);
