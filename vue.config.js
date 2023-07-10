// module.exports = {
//     chainWebpack: config => {
//       // 이미지 파일을 정적 파일로 처리하기 위한 설정 추가
//       config.module
//         .rule('images')
//         .test(/\.(jpe?g|png|gif)$/i)
//         .use('url-loader')
//         .loader('url-loader')
//         .tap(options => {
//           options.fallback.options.name = 'img/[name].[contenthash:8].[ext]';
//           options.esModule = false;
//           return options;
//         })
//         .end();
//     }
//   };