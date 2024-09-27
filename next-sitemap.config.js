/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://iclstech.edu.vn', // Thay thế bằng URL của bạn
    generateRobotsTxt: true, // Tạo file robots.txt
    sitemapSize: 7000, // Kích thước tối đa của file sitemap, mặc định là 5000
    changefreq: 'daily', // Tần suất thay đổi trang web
    priority: 0.7, // Độ ưu tiên của các URL
  };
  