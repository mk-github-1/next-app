/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // styledComponents
    // styledComponents: true
  },
  // 環境変数
  env: {
    // url: 127.0.0.1とlocalhostは同じ？、axiosはlocalhostだと解釈しない？
    // 本番環境はhttps:の必要がある
    SYSTEM_URL: 'http://localhost:3000',
    SYSTEM_API_URL: 'http://localhost:3000/api'
  },
  // assetPrefix: '/frontend',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // ドメイン名の事前解決
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // HTTPSを用いた通信の強制(本番環境時に使用)
          /*
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
           */
          // iframeの挙動: DENY(禁止) or SAMEORIGIN(同一オリジンのみ)
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // リソースの偽装確認
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // 外部リンクをクリックした時のへッダー情報を抑制: 6種類ある
          {
            key: 'Referrer-Policy',
            value: 'no-referrer'
          }
          // コンテンツの使用ポリシーを制御する
          // 下記は画像は無条件、以外は同一ドメインのみ取得 ※Ag Gridと相性が悪い
          /*
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src *;"
          }
           */
        ]
      }
    ]
  }
}

export default nextConfig
