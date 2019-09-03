import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-f4829.firebaseio.com/'
});

export default instance;