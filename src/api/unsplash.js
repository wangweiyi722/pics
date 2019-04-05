import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID 5a341dba0c0a2806792a7540010a194fc096d2bf5446361bcff9371b354fcd0c"
  }
})
