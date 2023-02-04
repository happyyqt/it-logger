import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";
// import TechSelectOptions from "../techs/TechSelectOptions";
import TechOptions from "../techs/TechOptions";
import PropTypes from "prop-types";

const AddLogModal = ({ techs, addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(true);
  const [tech, setTech] = useState("");

  // useEffect(() => {
  //   getTechs();
  //   console.log(techs);
  // }, []);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      console.log(message, attention, tech);
      //clear fields
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
                Choose your option
              </option>
              {/* <TechSelectOptions /> */}
              <TechOptions techs={techs} />
              {/* <option value="tech1">tech1</option>
              <option value="tech2">tech2</option>
              <option value="tech3">tech3</option> */}
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

const mapStateToProp = (state) => ({
  techs: state.tech.techs,
});

// call null for mapstateTopProps
export default connect(mapStateToProp, { addLog })(AddLogModal);
