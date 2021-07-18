const express = require('express'), 
    app = express(),
    path = require('path');

app.listen(3003);
app.get('/oauth', (req,res) => res.sendFile(path.join(__dirname, './kakao.html')));
