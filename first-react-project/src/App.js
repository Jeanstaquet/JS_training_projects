import React, { Component } from 'react';
import Validation from "./Validation/Validation";
import './App.css';
import Char from "./Char/Char";
import styled from "styled-components";

class App extends Component{
  state = {
    userInput: ""
  }

  inputChangedHandler = (event) => {
    let a = event.target.value
    this.setState({userInput:a});
  }

  deleteCharHandler = (index) => {
    //converti en array
    const text = this.state.userInput.split("");
    //coupe cet array à la pos déclarée
    text.splice(index, 1)
    //Nous remmetons sous forme de string
    const updateText = text.join("");
    this.setState({userInput:updateText})

  }
  render() {
    const charList = this.state.userInput.split("").map((char, index) => {
      return <Char character={char} key={index} clicked={() => this.deleteCharHandler(index)}/>
    });
  return (
    <div className="App">
      <h1>This is my first React Project: Conditionnals and list</h1>
      <form>
        <label>
         Nom :
          <input type="text" name="name" onChange={this.inputChangedHandler} value={this.state.userInput}/>
        </label>
          <input type="submit" value="Envoyer" />
      </form>
      <Validation textLength={this.state.userInput}/>
      {charList}
    </div>
  );
  }
}
export default App;

// {/* <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
// <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
// <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
// <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
// <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
// <li>When you click a CharComponent, it should be removed from the entered text.</li>
// </ol>
// <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}