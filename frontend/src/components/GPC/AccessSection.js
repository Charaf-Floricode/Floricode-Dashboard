// src/components/AccessSection.js
import React, { useState } from 'react';
import './Card.css';

export default function AccessSection() {
  const [message, setMessage] = useState(null);
  const [zip,     setZip]     = useState(null);
  const [debug,   setDebug]   = useState([]);
  const [loading, setLoading] = useState(false);

  const runAccess = async () => {
    setLoading(true);
    setMessage(null);
    setZip(null);
    setDebug([]);
    try {
      const res  = await fetch('/access/run-access', { method: 'POST' });
      const json = await (res.ok ? res.json() : Promise.reject(await res.text()));
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
      <button onClick={runAccess} disabled={loading}>
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
