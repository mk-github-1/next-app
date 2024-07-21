// import {} from 'next'
import axios from 'axios'
import { AxiosError, AxiosResponse } from 'axios'

export async function GET(request: Request) {
  try {
    // 何かする
    const persons: Record<string, string>[] = [
      { personName: 'Hello3', personCode: 'HELLO3' },
      { personName: 'Hello4', personCode: 'HELLO5' }
    ]

    return await new Response(JSON.stringify(persons), { status: 200 })

    // axios検証
    /*
    const API_URL =
    'https://xxx.sharepoint.com/sites/SharePointTest/' +
    '_api/web/GetFolderByServerRelativeUrl(' +
    "'/sites/SharePointTest/Shared%20Documents')/Files('%E3%83%86%E3%82%B9%E3%83%88.xlsx')/$value"

  // https://technicalagent.sharepoint.com/:x:/r/sites/SharePointTest/Shared%20Documents/
  // %E3%83%86%E3%82%B9%E3%83%88.xlsx?d=w36ac06b3863247df9a16b408bc02d665&csf=1&web=1&e=629FRj
  await axios({
      method: 'get',
      url: API_URL,
      params: '', // paramsをGETパラメータとして使用する
      headers: {
        Accept: 'application/json;odata=verbose', // などGET時のみ、必要であれば
        // Authorization: 'Bearer ' + accessToken など
        'Content-Type': 'application/json',
        Origin: 'https://technicalagent.sharepoint.com' // HTTPリクエストのCORS設定、ドメインが異なれば
      }
    })
      .then((response: AxiosResponse<Record<string, string>[]>) => {
        const results: Record<string, string>[] = response.data
      })
      .catch((response: AxiosError) => {
        console.log(response.message)
      })
    */
  } catch (error) {
    console.error(error)
    return await new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // 何かする

    return await new Response(JSON.stringify({ message: 'OK' }), { status: 200 })
  } catch (error) {
    console.error(error)
    return await new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    // 何かする

    return await new Response(JSON.stringify({ message: 'OK' }), { status: 200 })
  } catch (error) {
    console.error(error)
    return await new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    // 何かする

    return await new Response(JSON.stringify({ message: 'OK' }), { status: 200 })
  } catch (error) {
    console.error(error)
    return await new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}
