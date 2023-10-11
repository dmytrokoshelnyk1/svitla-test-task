import { Axios } from 'axios'

type headersProps = Record<string, string>

export interface getApiClientI {
  (baseURL: string, headers: headersProps): Axios
}
