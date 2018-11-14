import React from 'react';
import PropTypes from 'prop-types';

const Button = props => <button className="btn btn-sm btn-primary" onClick={props.calculate}>{props.num}</button>;

Button.propTypes = {
  calculate: PropTypes.func.isRequired,
  num: PropTypes.number.isRequired
}

export default Button;