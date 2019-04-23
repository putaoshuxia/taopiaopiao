const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/city', { 
       target: "https://dianying.taobao.com/" ,
       secure: false,
       changeOrigin: true,
       // cookieDomainRewrite: "http://localhost:3000"
    }));
};


// "proxy": {
//   "/app": {
//     "secure": false,
//     "target": "https://dianying.taobao.com/",
//     "changeOrigin": true
//   }
// }
// "proxy": "https://dianying.taobao.com/"

// var url = 'city/cityAction.json?action=cityAction&event_submit_doGetAllRegion=true';

//         axios.get(url).then((data)=>{
//             console.log(data.data);
//         }).catch((err)=>{
//             console.log(err)
//         })