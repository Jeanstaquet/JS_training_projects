import axios from "axios";

const url = "https://covid19.mathdro.id/api"

//La façon la plus moderne de gérer les données async
export const fetchData = async () => {
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