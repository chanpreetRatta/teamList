import apiClient from "./api-client";

class Players {
    getAllPlayers() {
        const controller = new AbortController(); 
        const request = apiClient.get("", {signal: controller.signal}); 

        return {request, cancel : () => controller.abort()}
    }
}

export default new Players; 