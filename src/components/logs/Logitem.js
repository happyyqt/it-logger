import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteLog, setCurrent } from "../../actions/logActions";
const Logitem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
  };
  return (
    <li>
      <div>
        <a
          href="#edit-log-modal"
          // onClick function format: onClick = {() => }
          // setCurrent when in edit mode.
          onClick={() => setCurrent(log)}
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment>{log.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

Logitem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(Logitem);
