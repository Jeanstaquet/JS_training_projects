import React, {Component} from 'react';
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
//pas besoin de nommé index, il va directement là-bas
import {fetchData} from "./api";

class App extends Component {
  state = {
    data: {},
    country: ""
  }

  //meilleur endroit pour fecther des données = CDM()
  async componentDidMount() {
    //attend la résolution de la promesse
    //await doit fonctionner dans une fonction que l'on met async
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  };

  handleCountryChange = async (country) => {
    console.log(country)
  }

  render() {
    const {data} = this.state
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart />
      </div>
    )
  }
};

export default App;
