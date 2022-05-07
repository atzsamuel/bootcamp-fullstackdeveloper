/* Http */
const http = require('http');

const requestHandler = (req, res) => {
  console.log(req.url, res);
}

const server = http.createServer(requestHandler);
server.listen(8500);