const http=require("http");
const app=require("./app")
const PORT=process.env.PORT || 8000;

// this line has benfit that we can organize code by seperating the server functionality from express code
const server=http.createServer(app)

server.listen(PORT,()=>{
    console.log(`Listening on PORT: ${PORT}`)
})
console.log(PORT);