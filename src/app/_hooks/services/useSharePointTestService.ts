import { useEffect, useState } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'

export const useSharePointTestService = (
  systemApiUrl: string,
  params: Record<string, string>,
  item: Record<string, string>
) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  // const [fileTests, setFileTests] = useState<Record<string, string>[]>([])
  // const API_URL: string = systemApiUrl + '/fileTests'
  const API_URL: string = '/fileTests'
  const API_URL2: string = 'https://xxx.sharepoint.com/sites/SharePointTest/Shared%20Documents/Forms/AllItems.aspx'

  const getFileTest = async (): Promise<void> => {
    setIsError(false)
    setIsLoading(true)

    // 1. GETでダウンロード検証: SharePointからブラウザ機能でダウンロードできるか確認
    // 2. GETでダウンロード検証: バックエンドではバイナリとしても扱えるか？
    await axios({
      method: 'get',
      url: API_URL,
      params: '', // paramsをGETパラメータとして使用する
      headers: {
        // Authorization: 'Bearer ' + accessToken など
        'Content-Type': 'application/json'
      }
    })
      .then((response: AxiosResponse<Record<string, string>[]>) => {
        const fileTests: Record<string, string>[] = response.data
        // setFileTests(fileTests)
        setIsError(false)
      })
      .catch((response: AxiosError) => {
        alert(response.message)
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }

  const postFileTest = async (fileTest: Record<string, string>): Promise<void> => {
    setIsError(false)
    setIsLoading(true)

    // 3. POSTでアップロード検証: テスト2.xlsxをアップロードする
    // 技術的には可能、フロントからSharePointが対応しているかどうかを確認、テスト
    // フロントができればバックエンドでも可能
    await axios({
      method: 'post',
      url: API_URL,
      data: fileTest,
      headers: {
        // Authorization: 'Bearer ' + accessToken など
        'Content-Type': 'application/json'
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

  return { isLoading, isError, getFileTest, postFileTest }
}
