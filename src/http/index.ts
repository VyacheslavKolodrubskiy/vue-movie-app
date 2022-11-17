import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_MOVIE_BASE_URL,
  params: {
    language: 'en',
    append_to_response: 'videos',
  },
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_APP_MOVIE_ACCESS_TOKEN}`,
    'Content-Type': 'application/json; charset=utf-8',
  },
})

export default http
