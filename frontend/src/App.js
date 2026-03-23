import React, { useEffect, useState } from 'react';
import './App.css';
import config from './config';

const API_URL = `${config.backendUrl}/api/id`;

function App() {
  const [successMessage, setSuccessMessage] = useState();
  const [failureMessage, setFailureMessage] = useState();

  useEffect(() => {
    const getId = async () => {
      try {
        const resp = await fetch(API_URL);
        const text = await resp.text();
        setSuccessMessage(text);
      } catch (e) {
        setFailureMessage(e.message);
      }
    };

    getId();
  }, []); // <-- runs only once

  return (
    <div className="App">
      {!failureMessage && !successMessage ? 'Fetching...' : null}
      {failureMessage ? failureMessage : null}
      {successMessage ? successMessage : null}
    </div>
  );
}

export default App;