/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ↓minifyしてビルドが早い。たまにコケるらしい
  swcMinify: true,
  // compilerにstyledComponents: trueを設定して使う
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
