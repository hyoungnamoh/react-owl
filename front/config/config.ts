import axios from 'axios';
//공용으로 사용할 axios base url
const baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3603';
axios.defaults.baseURL = baseURL;
console.log('hi');
export { baseURL };