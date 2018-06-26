const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/data/article.json');
const middlewares = jsonServer.defaults({ static: 'public'});
const port = 3002;

console.dir(jsonServer);


server.use(middlewares);
server.use(router);


server.listen(port, () => {
    console.log(`JSON Server is running at: http://localhost:${port}`);
});