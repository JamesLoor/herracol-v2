import axios from "axios";

type Method = 'get' | 'delete' | 'head'| 'options'| 'post'| 'put'| 'patch'
type GenerateService = {
  method: Method,
  url: string,
  data: any,
  token?: string
}

const baseURL = process.env.BASE_URL

function genService({ method, url: API, data }: GenerateService) {
  const url = `${baseURL}${API}`
  let headers = {
    'Content-Type': 'application/json',
  }

  return axios({
    url,
    data,
    method,
    headers
  })
}

export default genService