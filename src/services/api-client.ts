import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: "players.json"
})

export {CanceledError}; 
