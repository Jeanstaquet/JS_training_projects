import React, {Component} from 'react';
import './App.css';
import Output from "./Output/Output"

class App extends Component {
  state = {
    changeColor: false,
    ouputList: "",
    listItem: []
  };

  changeColorHandling = (e) => {
    const doeschange = this.state.changeColor;
    this.setState({changeColor:!doeschange});
    e.preventDefault();
    const newList = [...this.state.listItem, this.state.ouputList]
    console.log(newList)
    this.setState({ouputList:"",
                  listItem:newList})
  };

  changeHandler = (e) => {
    console.log(e.target.value)
    this.setState({ouputList:e.target.value})
  }
  
  deleteHandler = (index) => {
    const arr = [...this.state.listItem]
    arr.splice(index, 1);
    this.setState({listItem:arr})
  }; 
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
            <input type="text" onChange={(e) => this.changeHandler(e)} value={this.state.ouputList}/>
          </label>
          <inputs type="submit" value="Submit" style={styleButton} onClick={(e) => this.changeColorHandling(e)}/>
        </form>
        <Output items={this.state.listItem} click={(index) => this.deleteHandler(index)}/>
      </div>
    );
  }
};

export default App;
