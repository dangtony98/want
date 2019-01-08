const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8100;
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is running.');
});