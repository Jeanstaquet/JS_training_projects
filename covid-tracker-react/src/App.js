import React, {Component} from 'react';
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
//pas besoin de nommé index, il va directement là-bas
import {fetchData} from "./api";

class App extends Component {
  state = {
    data: {}
  }

  //meilleur endroit pour fecther des données = CDM()
  async componentDidMount() {
    //attend la résolution de la promesse
    //await doit fonctionner dans une fonction que l'on met async
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  };

  render() {
    const {data} = this.state
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </div>
    )
  }
};

export default App;
