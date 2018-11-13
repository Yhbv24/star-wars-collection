import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      clicks: 0
    }
  }

  handleClick = () => {
    this.setState(prevState => ({ clicks: prevState.clicks + 1 }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Button addOne={this.handleClick} />
            <p>Number of clicks: {this.state.clicks}</p>
          </div>
        </div>
      </div>
    );
  }
}

const Button = props => <button className="btn btn-sm btn-primary" onClick={props.addOne}>Click Me!</button>;

ReactDOM.render(<App />, document.getElementById('app'));
