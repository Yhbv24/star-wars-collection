import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    type={props.btnType}
    className={props.btnClass}
    onClick={props.handler}>{props.text}
  </button>
);

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button;
