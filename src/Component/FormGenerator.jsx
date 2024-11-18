import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const FormGenerator = ({ schema }) => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
  };

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(schema, null, 2));
    alert('JSON schema copied to clipboard!');
  };

  const downloadFormData = () => {
    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'form_submission.json';
    link.click();
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="mb-3">
        <button onClick={toggleDarkMode} className="btn btn-secondary">
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>&nbsp;&nbsp;&nbsp;
        <button onClick={copyToClipboard} className="btn btn-info ml-2">
          Copy Form JSON
        </button>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>JSON Schema (Left Side)</h2>
          <pre>{JSON.stringify(schema, null, 2)}</pre>
        </div>
        <div className="col-md-6">
          <h2>Generated Form (Right Side)</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {schema.fields?.map((field) => (
              <div className="form-group" key={field.name}>
                <label>{field.label}</label>
                <Controller
                  name={field.name}
                  control={control}
                  rules={{ required: field.required }}
                  render={({ field }) => <input {...field} className="form-control" />}
                />
                {errors[field.name] && (
                  <div className="text-danger">This field is required</div>
                )}
              </div>
            ))}
            <br></br>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      {formData && (
        <div className="mt-4">
          <h3>Form Submission Data</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          <button onClick={downloadFormData} className="btn btn-success mt-2">
            Download Submission as JSON
          </button>
        </div>
      )}
    </div>
  );
};

export default FormGenerator;
