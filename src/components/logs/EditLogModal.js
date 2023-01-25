import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(true);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      console.log(message, attention, tech);
      //clear fields
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
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Materialize Select</label>
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

export default EditLogModal;
