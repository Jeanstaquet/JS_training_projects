import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    changeColor: false
  };

  changeColorHandling = (e) => {
    const doeschange = this.state.changeColor;
    this.setState({changeColor:!doeschange});
    console.log(this.state.changeColor);
    e.preventDefault()
  }
  render() {
    const styleBasic= {
      padding: "8px",
      margin: "8px"
    };

    const styleButton= {
        backgroundColor: "#4CAF50", 
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
      };

    if(this.state.changeColor) {
      styleButton.backgroundColor= "pink";
    }
    return (
      <div className="App">
        <form style={styleBasic}>
          <label>
            Add an item to the list:
            <input type="text" name="name" id="input"/>
          </label>
          <inputs type="submit" value="Submit" style={styleButton} onClick={(e) => this.changeColorHandling(e)}/>
        </form>
        <p>
          
        </p>
      </div>
    );
  }
};

export default App;
