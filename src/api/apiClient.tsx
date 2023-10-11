import axios, { AxiosError, AxiosResponse } from 'axios'
import { getApiClientI } from '@/api/apiClient.types'

const LOGIN_PAGE = `${process.env.SITE_URL}/login`

const ApiUrl = process.env.API_URL
const baseHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const getApiClient: getApiClientI = (baseURL = ApiUrl, headers) => {
  const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
      ...baseHeaders,
      ...headers,
    },
  })

  axiosClient.interceptors.response.use(
    function (response: AxiosResponse) {
      return response
    },
    function (error: AxiosError) {
      let res = error.response
      if (res.status == 401) {
        window.location.href = LOGIN_PAGE
      }
      console.error('Error. Status Code:' + res.status)
      return Promise.reject(error)
    }
  )

  return axiosClient
}

const apiClient = getApiClient(ApiUrl, baseHeaders)

export { apiClient }
