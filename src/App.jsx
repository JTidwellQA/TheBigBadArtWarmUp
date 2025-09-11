import React, { useState, useEffect } from 'react';
import warmupsData from './warmups.json';
import './index.css';

function App() {
  const [selectedTable, setSelectedTable] = useState('Line');
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [output, setOutput] = useState(null);

  const handleTableClick = (tableName) => {
    setSelectedTable(tableName);
    setSelectedPrompt(null);
    setOutput(null);
  };

  const handlePromptClick = (prompt) => {
    setSelectedPrompt(prompt);
    setOutput(prompt.prompt);
  };

  const openReferenceSearch = (searchTerm) => {
    const query = encodeURIComponent(searchTerm);
    const url = `https://www.google.com/search?tbm=isch&q=${query}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <h1>🎨 The Big Bad Art Warm-Up</h1>

      <div className="container">
        {/* Table List */}
        <table>
          <thead>
            <tr>
              <th>Warm-Up Types</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(warmupsData).map((tableName) => (
              <tr key={tableName}>
                <td>
                  <button onClick={() => handleTableClick(tableName)}>
                    {tableName}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Prompts */}
        {selectedTable && (
          <table>
            <thead>
              <tr>
                <th>{selectedTable} Prompts</th>
              </tr>
            </thead>
            <tbody>
              {warmupsData[selectedTable].map((item, index) => (
                <tr key={index}>
                  <td>
                    <button onClick={() => handlePromptClick(item)}>
                      {item.title}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Output Box */}
      {output && (
        <div className="output-box">
          <p>{output}</p>
          <a
            href="#"
            onClick={() => openReferenceSearch(selectedPrompt.title)}
          >
            🔍 Search reference
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
