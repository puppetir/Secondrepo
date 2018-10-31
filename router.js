function route(handle, pathname, response, postData){
    console.log("a punto de rutear una peticion para ", pathname);
    //console.log("a punto de rutear una peticion para ", pathname);
    //console.log(String(pathname));
    //let cadena = "/subir";
    //cadena = pathname;
    //handle[cadena]();
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response, postData); 
    }else {
        console.log("No se encontro manipulador para " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});    
        response.write("error 404: not found.");
        response.end();
        //return "error 404: not found. "
    }
}
exports.route = route; 