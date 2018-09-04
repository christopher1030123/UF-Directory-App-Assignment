var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  var pathname = url.parse(request.url, true).pathname;
  if(request.method === 'GET' && /\/listings/.test(pathname)){
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(listingData));
    response.end();
  }
  else{
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Bad gateway error");
    response.end();
	}

  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  if (err){
        console.log(err);
    } else {
    listingData= JSON.parse(data); //now it an object
   // listingData = JSON.stringify(obj); //convert it back to json
    //fs.writeFile('listings.json', listingData, 'utf8', callback);
	http.createServer(function (request, response) {
		requestHandler(request,response);
	}).listen(8080);
	console.log('Server started');
	}
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
});

