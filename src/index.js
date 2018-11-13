import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<App name='Ash' />, document.getElementById('app'));
