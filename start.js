const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/data/article.json');
const middlewares = jsonServer.defaults();
const serveStatic = require('serve-static');
const port = 3002;


server.use(serveStatic('public'));
server.use(middlewares);
server.use(router);


server.listen(port, () => {
    console.log(`JSON Server is running at: http://localhost:${port}`);
});