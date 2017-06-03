import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Output from './Output';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };

    this.handleUserInput = this
      .handleUserInput
      .bind(this);
  }
  handleUserInput(value) {
    this.setState({input: value});
  }
  render() {
    return (
      <div className="App">
        <Input input={this.state.input} handleUserInput={this.handleUserInput}/>
        <Output input={this.state.input}/>
      </div>
    );
  }
}

export default App;
