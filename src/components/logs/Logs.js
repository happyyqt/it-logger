import React, { useState, useEffect } from "react";
import Logitem from "./Logitem";
import PreLoader from "../layout/PreLoader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  const getLogs = () => {
    setLoading(true);
    fetch("/logs")
      .then((response) => response.json())
      .then((data) => setLogs(data));
    setLoading(false);
  };
  if (loading) {
    return <PreLoader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Logs</h4>
      </li>
      {loading || logs.length !== 0 ? (
        logs.map((log) => <Logitem log={log} key={log.id} />)
      ) : (
        <p> No Logs...</p>
      )}
    </ul>
  );
};

export default Logs;
