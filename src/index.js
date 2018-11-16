import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PersonList from './components/PersonList';
import Button from './components/Button';
import './bootstrap.min.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      page: 1
    }
  }

  componentWillMount = () => {
    this.getResults(1);
  }

  getResults = () => {
    fetch('https://swapi.co/api/people/?page=' + this.state.page)
    .then(response => response.json())
    .then(data => {
      this.setState({ people: this.state.people.concat(data.results) });
    });

    this.setState({ page: this.state.page + 1 });
  }

  handleRemove = i => {
    let people = [...this.state.people];

    people.splice(i, 1);
    this.setState({ people: people });
  }

  render() {
    return this.state.people.length >= 1 ?
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <PersonList
              people={this.state.people}
              delete={this.handleRemove}
            />
            <Button
              btnType="button"
              btnClass="btn btn-primary"
              handler={this.getResults}
              text="Get More Results"
            />
          </div>
        </div>
      </div>
      : 
      <div className="container">
        <p>Loading...</p>
      </div> 
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
