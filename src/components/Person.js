import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Person = props => (
  <div className="person">
    <div className="person__title"><strong>{props.name}</strong></div>
    <div className="person__body">Birth Year: {props.birthYear}</div>
    <br />
    <div className="edit-section">
      <Button
        btnType={"button"}
        btnClass={"btn btn-danger"}
        text={"Delete"}
        handler={() => { props.delete(props.index) }}
      />
    </div>
    <hr />
  </div>
);

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default Person;
