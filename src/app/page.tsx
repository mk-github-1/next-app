'use client'

// Next
// import Image from 'next/image'
// import styles from './page.module.css'
import { memo, useEffect, useState } from 'react'

// AG Grid
import { AgGridReact } from 'ag-grid-react'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
import { ColDef, ModuleRegistry } from '@ag-grid-community/core'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-balham.css'
ModuleRegistry.registerModules([ClientSideRowModelModule])

// interface / types
import { IAgGridField } from '@/app/_types/_aggrid/AgGrid'
import { ISampleTableItem } from '@/app/_types/ISampleTableItem'

// custom hook
import { usePersonService } from '@/app/_hooks/services/usePersonService'
// import { useSharePointTestService } from '@/apps/_hooks/services/useSharePointTestService'

const SYSTEM_API_URL: string = process.env.SYSTEM_API_URL || ''

// トップページ
// ローカル実行のためログイン機能は実装していない
// マウントが終わるまでボタンを有効にしないようにする
export default function Page() {
  // Ag Grid
  const [columnDefs, setColDefs] = useState<IAgGridField[]>([
    { rowDrag: true, field: 'rowDrag', headerName: '', width: 40 },
    { field: 'personName', headerName: '名前', width: 140 },
    { field: 'personCode', headerName: 'コード', width: 140 }
  ])

  const [rowData, setRowData] = useState<ISampleTableItem[]>([])
  const [files, setFiles] = useState<File[]>([])

  // custom hook
  const { persons, getPerson, postPerson, patchPerson, deletePerson } = usePersonService(SYSTEM_API_URL, {}, {})
  // const { getFileTest, postFileTest } = useSharePointTestService(SYSTEM_API_URL, {}, {})

  // persons の変化を監視し、テーブルを更新する
  useEffect(() => {
    if (!persons.length) {
      setRowData([])
      return
    }

    const results: ISampleTableItem[] = persons.map((element: Record<string, string>) => {
      return {
        personName: element.personName,
        personCode: element.personCode
      }
    })

    setRowData(results)
  }, [persons])

  const onGet = async () => {
    await getPerson()
  }

  /* デバッグ実行で失敗するのでコメントアウト
  const onGetSharePoint = async () => {
    // await getFileTest()
  }

  const onPostSharePoint = async () => {
    // await postFileTest()
  }

  const fileHandler = (event: any) => {
    const files = event.target.files
    if (files && files.length > 0) {
      // setFiles(Array.from(files))
    }
  }
   */

  return (
    <>
      <div>
        Get started by editing <code>src/app/page.tsx</code>
      </div>
      <div className="ag-theme-balham" style={{ height: 300, marginTop: '5px' }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
      <div className="row mt-1">
        <div className="col-sm">
          <button className="btn btn-primary btn-sm" onClick={onGet}>
            onGetテスト
          </button>
        </div>
        {/* デバッグ実行で失敗するのでコメントアウト
        <div className="col-sm">
          <button className="btn btn-primary btn-sm" onClick={onGetSharePoint}>
            onGetSharePoint
          </button>
        </div>
        <div className="col-sm">
          <input
            type="file"
            className="form-control form-control-sm"
            style={{ width: '400px' }}
            onChange={fileHandler}
            multiple
          />
        </div>
        <div className="col-sm">
          <button className="btn btn-primary btn-sm" onClick={onPostSharePoint}>
            onPostSharePoint
          </button>
        </div>
        */}
      </div>

      <div className="row mt-1">
        <ul>
          <li>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs <span>-</span> Find in-depth information about Next.js features and API.
            </a>
          </li>
          <li>
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn <span>-</span> Learn about Next.js in an interactive course with&nbsp;quizzes!
            </a>
          </li>
          <li>
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates <span>-</span> Explore starter templates for Next.js.
            </a>
          </li>
          <li>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy <span>-</span> Instantly deploy your Next.js site to a shareable URL with Vercel.
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
