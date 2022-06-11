const jsonServer = require('json-server');
const server = jsonServer.create();

const router = jsonServer.router("./db.json");

const middleware = jsonServer.defaults({
    static:"./build"
});
const PORT = process.env.PORT || 5500;
server.use(middleware);
server.use(
    jsonServer.rewriter({
        "/api/*":"$1"
    })
);
server.use(router);
server.listen(PORT,() =>{
    console.log("server is live at PORT", PORT);
})