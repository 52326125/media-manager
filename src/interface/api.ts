import { type ResponseType } from 'axios'
import type { CommonOptions } from '@/utils/api/axiosHelper'

export type ApiMessageType = 'SUCCESS' | 'WARN' | 'INFO' | 'ERROR'

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type RequestResponse<T> = T | Error

export type Api<T = null, U = object> = (
  params?: U,
  options?: CommonOptions
) => Promise<RequestResponse<T>>

export interface ApiRequestOptions<T = unknown> {
  url: string
  method: ApiMethod
  params?: T
  payload?: T
  urlPrefix?: string
  contentType?: string
  showMessage?: boolean
  authorizeNeeded?: boolean
  abortController?: AbortController
  responseType?: ResponseType
}
