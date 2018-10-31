/*var http = require("http");
http.createServer(function(request, response){
    console.log("peticion recibida");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("hello wlord");
    response.end();
}).listen(8888);
console.log("servidor iniciado");*/
var http = require("http");
var url = require("url");
function iniciar(route, handle) {
  function onRequest(request, response) {
    var dataPosteada = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Petición para " + pathname + " recibida.");
    request.setEncoding("utf-8");

    request.addListener("data", function(chunk){
      dataPosteada += chunk;
      console.log("se recibio el pedazo: " + chunk);
    });
    request.addListener("end", function(){
        route(handle, pathname, response, dataPosteada);
    });
    
    /*
    response.writeHead(200, {"Content-Type": "text/html"});    
    response.write(content);
    response.end();*/
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;
