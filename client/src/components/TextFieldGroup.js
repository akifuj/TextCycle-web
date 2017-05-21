import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldGroup = ({ name, type, value, floatingLabelText, onChange, errorText }) => {
  return (
    <div className="field-line">
      <TextField
        name={name}
        type={type}
        value={value}
        floatingLabelText={floatingLabelText}
        onChange={onChange}
        errorText={errorText}
      />
    </div>
  );
}

TextField.PropTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  floatingLabelText: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errorText: React.PropTypes.string,
}

export default TextFieldGroup;
