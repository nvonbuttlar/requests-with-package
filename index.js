var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    console.log('ERROR! ERROR! ERROR!')
  })
  .on('response', function(response) {

    console.log('Response Status Code: ', response.statusCode);
    console.log('Status Message: ', response.statusMessage);
    console.log('Content-type: ', response.headers['content-type'])

  })
  .pipe(fs.createWriteStream('./future.jpg'));

