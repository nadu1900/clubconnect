const http = require('http');
const httpProxy = require('http-proxy');


const proxy = httpProxy.createProxyServer({});

const target = 'https://engage-api.campuslabs.com';


const server = http.createServer((req, res) => {

  proxy.web(req, res, { target });
});


const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
