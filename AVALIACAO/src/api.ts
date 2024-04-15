import axios from "axios";

export default axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/series/18892?&ts=1&apikey=6a40e682b089ccdc2b527d85c54086f1&hash=d91b83b8405423e66853a03dc3966ea9'
})