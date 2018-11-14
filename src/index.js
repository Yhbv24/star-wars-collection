import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PersonList from './components/PersonList';
import './bootstrap.min.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [
        {
          name: 'Ash',
          age: 33
        },
        {
          name: 'Tiffany',
          age: 31
        },
        {
          name: 'Felix',
          age: 30
        }
      ]
    }
  }

  handleAdd = person => {
    // Will fill in later
  }

  handleRemove = i => {
    let people = [...this.state.people];

    people.splice(i, 1);
    this.setState({ people: people });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <PersonList
              people={this.state.people}
              add={this.handleAdd}
              delete={this.handleRemove}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
