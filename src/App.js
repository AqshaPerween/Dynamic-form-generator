import React, { useState } from 'react';
import FormGenerator from './Component/FormGenerator.jsx'; // Import the FormGenerator component

const App = () => {
  // Example schema for the dynamic form
  const [schema, setSchema] = useState({
    fields: [
      { name: 'username', label: 'Username', required: true },
      { name: 'email', label: 'Email', required: true },
    ],
  });

  return (
    <div className="container">
      <h1>Dynamic Form Generator</h1>
      <FormGenerator schema={schema} /> {/* Pass schema to FormGenerator */}
    </div>
  );
};

export default App;
