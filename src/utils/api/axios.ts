import axios, {
  // isCancel,
  // isAxiosError,
  type AxiosRequestConfig,
  // type InternalAxiosRequestConfig,
} from 'axios'
import type { ApiRequestOptions, RequestResponse } from '@/interface/api'

const instance = axios.create({
  baseURL: window.location.origin,
  timeout: 20000,
})

const abortControllers: Array<AbortController> = []

// const pendingRequests: Array<(newToken: string | null) => void> = []
// let isDuringRefresh = false

// 不知道会不会有风险，不过还是使用非同步防止有换页后的request也被abort的风险
export const cancelAllQueueingRequest = async () => {
  return new Promise<void>(resolve => {
    while (abortControllers.length) {
      abortControllers.shift()?.abort()
    }
    resolve()
  })
}

export const sendApiRequest = async <T>(
  options: ApiRequestOptions
): Promise<RequestResponse<T>> => {
  const {
    url,
    method,
    params,
    payload,
    abortController,
    urlPrefix = '/rest',
    // authorizeNeeded = true,
    contentType = 'application/json;charset=UTF-8',
  } = options

  if (abortController) abortControllers.push(abortController)

  const axiosConfig: AxiosRequestConfig = {
    url: urlPrefix + url,
    method,
    signal: abortController?.signal,
    headers: {
      Accept: 'application/json',
      'Content-Type': contentType,
    },
  }

  // TODO: check electron storage api
  // if (authorizeNeeded) {
  //   const { token } = getLogin()
  //   axiosConfig.headers!.Authorization = token ? `Bearer ${token}` : ''
  // }

  if (params) axiosConfig.params = params
  if (payload) axiosConfig.data = payload

  try {
    const response = await instance<T>(axiosConfig)
    return response.data
  } catch (error) {
    return error
  }
}
