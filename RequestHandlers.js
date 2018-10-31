var exec = require("child_process").exec;
var querystring = require("querystring");
// function iniciar(response) {
//   console.log("Manipulador de petición 'iniciar' ha sido llamado.");
//   /*function sleep(miliseconds){
//     var startTime =new Date().getTime();
//     while(new Date().getTime() < startTime + miliseconds);
//   }*/
  
//   exec("ls -lah", function(error, stdout, stderr){
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write(stdout);
//     response.end();
//   });

//   //sleep(10000);
//   //return "hola iniciar";
// }

function iniciar(response, postData) {
  console.log("Manipulador de peticiones 'iniciar' fue llamado.");
 
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}


function subir(response, postData) {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
  //return "hola subir";
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("tu enviaste " + querystring.parse(postData)["text"]);
  response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;