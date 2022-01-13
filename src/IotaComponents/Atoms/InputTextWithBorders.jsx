import React from 'react';
import PropTypes from 'prop-types';

const InputTextWithBorders = ({
  ckey,
  value,
  name,
  placeholder,
  onChange
}) => {

  return (
    <div 
      className="row-flex-centered text-center">
     <input
        ckey={ckey}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        id=""
        onChange={(event) => {
          onChange({key: name, text: event.target.value})}}
        className='input-text-with-border' />
    </div>
  );
};

InputTextWithBorders.propTypes = {
  ckey: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

InputTextWithBorders.defaultProps = {
};

export default InputTextWithBorders;
