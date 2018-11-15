import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';

const PersonList = props => (
  <div className="personList">
    <hr />
    {props.people.map((person, i) => (
      <Person
        key={i}
        index={i}
        name={person.name}
        birthYear={person.birth_year}
        delete={props.delete}
      />
    ))}
  </div>
);

PersonList.propTypes = {
  delete: PropTypes.func.isRequired
}

export default PersonList;
