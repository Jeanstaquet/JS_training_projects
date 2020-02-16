import React, { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
    userInput: "test"
  }

  inputChangedHandler = (event) => {
    let a = [...this.state.userInput];
    a = event.target.value
    this.setState({userInput:a})
  }

  render() {
  return (
    <div className="App">
      <h1>This is my first React Project: Conditionnals and list</h1>
      <form>
        <label>
         Nom :
          <input type="text" name="name" onChange={this.inputChangedHandler}/>
        </label>
          <input type="submit" value="Envoyer" />
      </form>
      <p>{this.state.userInput}</p>
    </div>
  );
  }
}
export default App;
