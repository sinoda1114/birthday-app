/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Vercelへのデプロイに必要な設定
  output: 'export', // 静的ファイルとして出力
};

module.exports = nextConfig; 