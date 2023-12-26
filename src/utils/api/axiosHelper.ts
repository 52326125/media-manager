import type { ApiMethod, ApiRequestOptions, RequestResponse } from '@/interface/api'
import { sendApiRequest } from './axios'

export interface CommonOptions {
  authorizeNeeded?: boolean
  abortController?: AbortController
}

export interface NonMethodRequestOptions extends CommonOptions {
  method: ApiMethod
}

export const sendGetRequest = async <T, U>(
  url: string,
  params?: U,
  options?: CommonOptions,
): Promise<RequestResponse<T>> => {
  const { authorizeNeeded, abortController } = options ?? {}
  const baseOptions: ApiRequestOptions = {
    url,
    params,
    method: 'GET',
    authorizeNeeded,
    abortController,
  }
  return await sendApiRequest(baseOptions)
}

export const sendPostRequest = async <T, U>(
  url: string,
  payload?: U,
  options?: CommonOptions,
): Promise<RequestResponse<T>> => {
  const { authorizeNeeded, abortController } = options ?? {}
  const baseOptions: ApiRequestOptions = {
    url,
    payload,
    method: 'POST',
    authorizeNeeded,
    abortController,
  }
  return await sendApiRequest(baseOptions)
}

export const sendPutRequest = async <T, U>(
  url: string,
  payload: U,
  options?: CommonOptions,
): Promise<RequestResponse<T>> => {
  const { authorizeNeeded, abortController } = options ?? {}
  const baseOptions: ApiRequestOptions = {
    url,
    payload,
    method: 'PUT',
    authorizeNeeded,
    abortController,
  }
  return await sendApiRequest(baseOptions)
}

export const sendDeleteRequest = async <T, U>(
  url: string,
  payload: U,
  options?: CommonOptions,
): Promise<RequestResponse<T>> => {
  const { authorizeNeeded, abortController } = options ?? {}
  const baseOptions: ApiRequestOptions = {
    url,
    payload,
    method: 'DELETE',
    authorizeNeeded,
    abortController,
  }
  return await sendApiRequest(baseOptions)
}

export const sendUrlEncodedRequest = async <T, U>(
  url: string,
  payload: U,
  options: NonMethodRequestOptions,
): Promise<RequestResponse<T>> => {
  const { authorizeNeeded, method, abortController } = options
  const baseOptions: ApiRequestOptions = {
    url,
    payload,
    method,
    authorizeNeeded,
    abortController,
    contentType: 'application/x-www-form-urlencoded',
  }
  return await sendApiRequest(baseOptions)
}

export const sendDownloadRequest = async <T, U>(
  url: string,
  payload: U,
  options: NonMethodRequestOptions,
): Promise<RequestResponse<T>> => {
  const { authorizeNeeded, method, abortController } = options
  const baseOptions: ApiRequestOptions = {
    url,
    payload,
    method,
    authorizeNeeded,
    abortController,
    responseType: 'blob',
  }
  return await sendApiRequest(baseOptions)
}

export const sendUploadRequest = async <T, U>(
  url: string,
  payload: U,
  options?: CommonOptions,
): Promise<RequestResponse<T>> => {
  const { authorizeNeeded, abortController } = options ?? {}
  const baseOptions: ApiRequestOptions = {
    url,
    payload,
    method: 'POST',
    authorizeNeeded,
    abortController,
    contentType: 'multipart/form-data',
  }
  return await sendApiRequest(baseOptions)
}
