import React from 'react';
import Button from './Button';

const AddPerson = props => (
  <div>
    <input type="text" placeholder="Name"></input><br />
    <input type="number" placeholder="Age"></input><br />
    <Button btnType={"button"} btnClass={"btn btn-primary"} text={"Add New Person"} handler={props.handleAdd} />
  </div>
);

export default AddPerson;