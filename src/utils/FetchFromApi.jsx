import axios from "axios"

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50"
  },
  headers: {
    'X-RapidAPI-Key': '127750396dmsh0484c81671482cep10251djsn9c272ba59b56',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


  export const fetchFormAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data

  }