import React from 'react';

const FormPreview = ({ schema }) => {
  return (
    <div>
      {schema.fields?.map((field) => (
        <div className="form-group" key={field.name}>
          <label>{field.label}</label>
          <input type={field.type} className="form-control" />
        </div>
      ))}
    </div>
  );
};

export default FormPreview;
