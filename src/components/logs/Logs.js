import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Logitem from "./Logitem";
import PreLoader from "../layout/PreLoader";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log, getLogs }) => {
  const { logs, loading } = log;
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p> No Logs...</p>
      ) : (
        logs.map((log) => <Logitem log={log} key={log.id} />)
      )}
    </ul>
  );
};
Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { getLogs })(Logs);
