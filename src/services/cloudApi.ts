import 'dotenv/config'
import axios from 'axios'

export const cloudApi = axios.create({
  baseURL: 'https://recrutamento.alterdata.cloud/listaServidor',
  headers: {
    authorization: process.env.REACT_APP_API_KEY,
  },
})
