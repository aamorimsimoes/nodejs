const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log('request made');
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('content-type', 'text/html');

  // res.write('<head><link rel="stylesheet" href="#"></head>')
  // res.write('<p>hello, amorim</p>');
  // res.write('<p>hello again, amorim</p>');
  // res.end();

  // send a html file 
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  })

});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});