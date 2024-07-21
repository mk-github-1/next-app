import { useState } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'

export const usePersonService = (
  systemApiUrl: string,
  params: Record<string, string>,
  item: Record<string, string>
) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [persons, setPersons] = useState<Record<string, string>[]>([])
  const API_URL: string = systemApiUrl + '/persons'

  const getPerson = async (): Promise<void> => {
    setIsError(false)
    setIsLoading(true)

    await axios({
      method: 'get',
      url: API_URL,
      params: '', // paramsをGETパラメータとして使用する
      headers: {
        // Accept: 'application/json;odata=verbose', などGET時のみ、必要であれば
        // Authorization: 'Bearer ' + accessToken など
        'Content-Type': 'application/json'
        // Origin: 'https://xxx.com' HTTPリクエストのCORS設定、ドメインが異なれば
      }
    })
      .then((response: AxiosResponse<Record<string, string>[]>) => {
        const results: Record<string, string>[] = response.data
        setPersons(results)
        setIsError(false)
      })
      .catch((response: AxiosError) => {
        alert(response.message)
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }

  const postPerson = async (person: Record<string, string>): Promise<void> => {
    setIsError(false)
    setIsLoading(true)

    await axios({
      method: 'post',
      url: API_URL,
      data: JSON.stringify(person), // JSON.stringifyは必要？
      headers: {
        // Authorization: 'Bearer ' + accessToken など
        'Content-Type': 'application/json'
        // Origin: 'https://xxx.com' HTTPリクエストのCORS設定、ドメインが異なれば
      }
    })
      .then((response: AxiosResponse<string>) => {
        setIsError(false)
      })
      .catch((response: AxiosError) => {
        alert(response.message)
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }

  const patchPerson = async (person: Record<string, string>): Promise<void> => {
    setIsError(false)
    setIsLoading(true)

    await axios({
      method: 'patch',
      url: API_URL,
      data: JSON.stringify(person), // JSON.stringifyは必要？
      headers: {
        // Authorization: 'Bearer ' + accessToken など
        'Content-Type': 'application/json'
        // Origin: 'https://xxx.com' HTTPリクエストのCORS設定、ドメインが異なれば
      }
    })
      .then((response: AxiosResponse<string>) => {
        setIsError(false)
      })
      .catch((response: AxiosError) => {
        alert(response.message)
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }

  const deletePerson = async (person: Record<string, string>): Promise<void> => {
    setIsError(false)
    setIsLoading(true)

    await axios({
      method: 'delete',
      url: API_URL,
      data: JSON.stringify(person), // JSON.stringifyは必要？
      headers: {
        // Authorization: 'Bearer ' + accessToken, など
        'Content-Type': 'application/json'
        // Origin: 'https://xxx.com' HTTPリクエストのCORS設定、ドメインが異なれば
      }
    })
      .then((response: AxiosResponse<string>) => {
        setIsError(false)
      })
      .catch((response: AxiosError) => {
        alert(response.message)
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }

  return { persons, isLoading, isError, getPerson, postPerson, patchPerson, deletePerson }
}
