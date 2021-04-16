var express = require('express');
var bodyparser=require('body-parser');

var route=require('./routes/userRoutes');
const app = express();

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static(__dirname+'/controller/views'));

app.engine('ejs',require('ejs').renderFile);
app.use('/',route);

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
})


