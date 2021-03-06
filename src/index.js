const express = require('express');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');

const server = express();
const lrServer = livereload.createServer({
    "extraExts": "scss"
});

const PORT = 5000;
const publicPath = path.join(__dirname, '../public');
const sassFolder = path.join(__dirname, '../sass');

/* Middleware */
server.use(
    sassMiddleware({
        src: sassFolder,
        dest: path.join(publicPath, '/css'),
        debug: true,
        outputStyle: 'expanded',
        prefix: '/css'
    })
);

server.use(connectLivereload());
server.use(express.static(publicPath));
lrServer.watch([publicPath, sassFolder]);


server.get('/luxury', (req, res) => {
    res.sendFile(path.join(publicPath, 'lux.html'));
}).listen(PORT, () => console.log(`Server up on port ${PORT}.`));