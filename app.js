var experss = require ('express');
var app = experss();

app.listen(3000, function(){
    console.log('http://127.0.0.1:3000');
});


app.get('/', function(req, res, next){
     res.send('<h1>hello world</h1>');
});

app.get('/sutt2000', function(req, res, next){
     res.send('<h1>hello sutt2000</h1>');
});