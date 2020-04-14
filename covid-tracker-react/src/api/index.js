import axios from "axios";

const url = "https://covid19.mathdro.id/api"

//La façon la plus moderne de gérer les données async
export const fetchData = async () => {
    let chnageableUrl = url;
    try {
        //Destructuring the reponse
        const {data} = await axios.get(url)
        //Pour pouvoir la caller dans app.js

        //On va prendre uniquement les parties de {data que nous avons besoins}
        const modifiedData = {
            confirmed: data.confirmed.value,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }

        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`)
        
        //returning the data as an object
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {
       console.log(error) 
    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`)
        
        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error)
    }
}