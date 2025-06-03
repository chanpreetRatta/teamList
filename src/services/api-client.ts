// implement the cancel button later. For now just add the api services

import axios from "axios";

const getPlayers = () => {
    const baseURL = "./players.json"; 
    const response = axios.get(baseURL); 

    return response
}

export default getPlayers; 