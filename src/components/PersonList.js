import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';
import AddPerson from './AddPerson';

const PersonList = props => (
  <div className="personList">
    {/* <AddPerson add={props.add} /> */}
    <hr />
    {props.people.map((person, i) => (
      <Person
        key={i}
        index={i}
        name={person.name}
        age={person.age}
        delete={props.delete}
      />
    ))}
  </div>
);

PersonList.propTypes = {
  add: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired
}

export default PersonList;
