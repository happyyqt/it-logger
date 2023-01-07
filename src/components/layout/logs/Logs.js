import React, { useState, useEffect } from "react";

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
    return <h4>Loading...</h4>;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Logs</h4>
      </li>
      {!loading && logs.length !== 0 ? (
        logs.map((log) => <li>{log.message}</li>)
      ) : (
        <p> No Logs...</p>
      )}
    </ul>
  );
};

export default Logs;
