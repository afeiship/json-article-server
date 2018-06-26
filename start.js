const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/data/article.json');
const middlewares = jsonServer.defaults();
const serveStatic = require('serve-static');
server.use(serveStatic('public'));
server.use(middlewares);
server.use(router);
server.listen(3002, () => {
    console.log('JSON Server is running at: 3002');
});