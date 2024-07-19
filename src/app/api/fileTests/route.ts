// import {} from 'next'
import axios, { AxiosError, AxiosResponse } from 'axios'

// axiosでファイルダウンロード検証
export async function GET(request: Request) {
  const API_URL: string = 'https://xxx.sharepoint.com/sites/SharePointTest/Shared%20Documents/Forms/AllItems.aspx'

  try {
    // axios GETでダウンロード
    await axios({
      method: 'get',
      url: API_URL,
      params: '', // paramsをGETパラメータとして使用する
      headers: {
        // 'Bearer-Token': '' ※必要？
        'Content-Type': 'application/json'
      }
    })
      .then((response: AxiosResponse<Record<string, string>[]>) => {
        const fileTests: Record<string, string>[] = response.data
        // setFileTests(fileTests)
      })
      .catch((response: AxiosError) => {
        alert(response.message)
      })
  } catch (error) {
    console.error(error)
    return await new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}

// アップロードはフロントのみ確認
/*
export async function POST(request: Request) {
  try {
    // 何かする

    return await new Response(JSON.stringify({ message: 'OK' }), { status: 200 })
  } catch (error) {
    console.error(error)
    return await new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}
 */
