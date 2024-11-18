// JSONEditor.js
import React, { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript'; // Syntax highlighting for JSON

const JSONEditor = ({ setSchema }) => {
  const [jsonError, setJsonError] = useState(null);

  const handleJsonChange = (editor, data, value) => {
    try {
      const parsed = JSON.parse(value);
      setSchema(parsed); // Pass the valid schema up to the App component
      setJsonError(null); // Clear previous errors
    } catch (error) {
      setJsonError('Invalid JSON schema');
    }
  };

  return (
    <div>
      <CodeMirror
        value='{"fields": []}' // Default empty schema
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={handleJsonChange}
      />
      {jsonError && <div className="text-danger">{jsonError}</div>}
    </div>
  );
};

export default JSONEditor;
