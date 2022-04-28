var NodeGeocoder = require('node-geocoder');
var http = require("http");
var result;

var options = {
  provider: 'google',
 
  // Optional depending on the providers 
  httpAdapter: 'https', // Default 
  apiKey: 'AIzaSyDER-ZaV4plLDx6-J7DuQG5jYgrfpPMlhM', // for Mapquest, OpenCage, Google Premier 
  //formatter: 'string'         // 'gpx', 'string', ... 
};
 
var geocoder = NodeGeocoder(options);
geocoder.geocode('Jernbanetorget 1, 0154 Oslo)
  .then(function(res) {
    result=res;
  })
  .catch(function(err) {
    console.log(err);
  });
  
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'application/json'});
   response.write(JSON.stringify(result));
   // Send the response body as "Hello World"
   response.end();
    
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');


 




