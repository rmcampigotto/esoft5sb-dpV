import axios from "axios";

class ApiCon {
    async getData() {
        const response = await axios.get('https://gateway.marvel.com/v1/public/series/28064/comics?&ts=1&apikey=6a40e682b089ccdc2b527d85c54086f1&hash=d91b83b8405423e66853a03dc3966ea9')
        // O primeiro 'data' se refere ao retorno da função da biblioteca axios, o segundo a propriedade do json da API da Marvel recuperado
        return response.data.data.results
    }
}

export default new ApiCon()
