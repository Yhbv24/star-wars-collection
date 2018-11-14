import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import './bootstrap.min.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      clicks: 0
    }
  }

  handleClick(num) {
    this.setState(prevState => ({ clicks: prevState.clicks + num }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Button calculate={this.handleClick.bind(this, 1)} num={1} />
            <Button calculate={this.handleClick.bind(this, 5)} num={5} />
            <Button calculate={this.handleClick.bind(this, -1)} num={-1} />
            <p>Number of clicks: {this.state.clicks}</p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
