import { useState } from 'react'
// import axios, { AxiosError, AxiosResponse } from 'axios'

import spauth from 'node-sp-auth'
import request from 'request-promise'
import REST from 'gd-sprest'

export const useSharePointTestService = (apiUrl: string) => {
  const USERNAME = '[SPO Login]'
  const PASSWORD = '[SPO Password]'
  const API_URL: string = 'https://xxx.sharepoint.com/sites/SharePointTest/Shared%20Documents/Forms/AllItems.aspx'

  const API_URL2: string = '/fileTests'

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [fileTests, setFileTests] = useState<Record<string, string>[]>([])

  // const [fileTests, setFileTests] = useState<Record<string, string>[]>([])
  // const API_URL: string = systemApiUrl + '/fileTests'

  const getFileTest = async (): Promise<void> => {
    setIsError(false)
    setIsLoading(true)

    // GETでダウンロード検証: SharePointからブラウザ機能でダウンロードできるか確認
    // GETでダウンロード検証: バックエンドではバイナリとしても扱えるか？

    // 1. Connect to SharePoint
    // Log
    console.log('Connecting to SPO')

    // Connect to SPO
    spauth
      .getAuth(API_URL, {
        username: USERNAME,
        password: PASSWORD,
        online: true
      })
      .then((options) => {
        console.log('Connected to SPO')

        // 2. Generate the Request
        // Get the web
        var info = REST.Web(API_URL)
          // Get the 'Site Assets' library
          .Lists('Site Assets')
          // Get the root folder
          .RootFolder()
          // Get the 'sprest' sub-folder
          .Folders('sprest')
          // Get the files in the folder
          .Files()
          // Get the request information
          .getInfo()

        // 3. Request Header Information
        // Copy the headers from the SP authentication
        for (var key in options.headers) {
          // Set the header
          info.headers[key] = options.headers[key]
        }

        // 4. Execute the Request
        // Execute the request, based on the method
        request[info.method == 'GET' ? 'get' : 'post']({
          headers: info.headers,
          url: info.url,
          body: info.data
        }).then(
          // Success
          (response) => {
            var obj = JSON.parse(response).d
            if (obj.results && obj.results.length > 0) {
              // Parse the results
              for (var i = 0; i < obj.results.length; i++) {
                // Log
                console.log(obj.results[i])
              }
            } else {
              // Log
              console.log(obj)
            }
          },
          // Error
          (error) => {
            // Log
            console.log('Error executing the request', error)
          }
        )

        setIsError(false)
      })
      .catch((response) => {
        alert(response.message)
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }

  // ファイルを選択してから読み込む
  const postFileTest = async (files: File[]): Promise<void> => {
    setIsError(false)
    setIsLoading(true)

    // 3. POSTでアップロード検証: テスト2.xlsxをアップロードする
    // 技術的には可能、フロントからSharePointが対応しているかどうかを確認、テスト
    // フロントができればバックエンドでも可能
    // 1. Connect to SharePoint
    // Log
    console.log('Connecting to SPO')

    // Connect to SPO
    spauth
      .getAuth(API_URL, {
        username: USERNAME,
        password: PASSWORD,
        online: true
      })
      .then((options) => {
        console.log('Connected to SPO')

        // 2. Generate the Request
        // Get the web
        var info = REST.Web(API_URL)
          // Get the 'Site Assets' library
          .Lists('Site Assets')
          // Get the root folder
          .RootFolder()
          // Get the 'sprest' sub-folder
          .Folders('sprest')
          // Get the files in the folder
          .Files()
          // Get the request information
          .getInfo()

        // 3. Request Header Information
        // Copy the headers from the SP authentication
        for (var key in options.headers) {
          // Set the header
          info.headers[key] = options.headers[key]
        }

        // 4. Execute the Request
        // Execute the request, based on the method
        request[info.method == 'GET' ? 'get' : 'post']({
          headers: info.headers,
          url: info.url,
          body: info.data
        }).then(
          // Success
          (response) => {
            var obj = JSON.parse(response).d
            if (obj.results && obj.results.length > 0) {
              // Parse the results
              for (var i = 0; i < obj.results.length; i++) {
                // Log
                console.log(obj.results[i])
              }
            } else {
              // Log
              console.log(obj)
            }
          },
          // Error
          (error) => {
            // Log
            console.log('Error executing the request', error)
          }
        )

        setIsError(false)
      })
      .catch((response) => {
        alert(response.message)
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }

  return { isLoading, isError, getFileTest, postFileTest }
}
