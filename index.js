const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

var app = express();
var port = 3005

app.use('/api', createProxyMiddleware({
    target: 'http://localhost:10769',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', 
    },
}));

app.use("/link", express.static(__dirname + '/gui/link'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/gui/index.html'));
});

app.listen(port, () => {
    console.log(`Cider Home Remote is listening on port ${port}`)
})