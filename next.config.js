/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                  // статический экспорт
  images: { unoptimized: true },     // без next/image оптимизации на Pages
  trailingSlash: true                // чтобы /page/ открывались как /page/index.html
  // basePath НЕ нужен, т.к. используем кастомный домен argo-72.ru
};
module.exports = nextConfig;
