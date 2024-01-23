const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/c", {
useNewUrlParser: true,
useUnifiedTopology: true
});

const contactSchema = {
email: String,
query: String,
};

const Contact = mongoose.model("Contact", contactSchema);

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render("contact");
});

app.post("/contact", function (req, res) {
	console.log(req.body.email);
    console.log(req.body.query);
const contact = new Contact({
	email: req.body.email,
	query: req.body.query,
});
contact.save(function (err) {
	if (err) {
		throw err;
	} else {
		res.render("contact");
	}
});
});

app.listen(8000, function(){
	console.log("App is running on Port 8000");
});

/*const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data))
    res.end()
}).listen(4000)*/
/*let express = require('express');
let app = express();
app.get('/', function (req, res) {
    res.send("<h1>Hello World hmmm </h1>")
})
app.get('/api', (req, res) => {
    /*res.send("jj kk")
    res.send({apple2:5,mango6:7})*/
  /*  res.json({
        "employees": [{ "name": "shyam", "email": "shy@gmail.com", "age": 34 },
                  { "name": "ram", "email": "shr@gmail.com", "age": 54 },
                  { "name": "yam", "email": "shyyy@gmail.com", "age": 94 }
                 ]
             })
      })
app.listen(4000, function () {
    console.log("server  running on port 4000!")
}) */
/*
const app = require('express');
const PORT=8080
app.listen(PORT,() => console.log(`server running on ${PORT}`));
app.get('/fruits',(req,res)=>{
    res.send({apple:2,banana:34})
})
*/
/*var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});*/


