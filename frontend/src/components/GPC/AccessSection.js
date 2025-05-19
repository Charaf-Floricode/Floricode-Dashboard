// src/components/AccessSection.js
import React, { useState } from 'react';
import './Card.css';
import {runAccess} from '../../services/api';

export default function AccessSection() {
  const [message, setMessage] = useState(null);
  const [zip,     setZip]     = useState(null);
  const [debug,   setDebug]   = useState([]);
  const [loading, setLoading] = useState(false);

  const runaccess = async () => {
    setLoading(true);
    setMessage(null);
    setZip(null);
    setDebug([]);
    try {
      const json = await runAccess();
      setMessage(json.message);
      setZip(json.zip);
      setDebug(json.debug || []);
    } catch (err) {
      setMessage('Error: ' + err.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Access Export</h2>
      <button onClick={runaccess} disabled={loading}>
        {loading ? 'Exporting…' : 'Run Access Export'}
      </button>
      {message && <p>{message}</p>}
      {zip     && <p>Zip: <code>{zip}</code></p>}
      {debug.length > 0 && (
        <ul>
          {debug.map((step,i) => <li key={i}>{step}</li>)}
        </ul>
      )}
    </div>
  );
}
