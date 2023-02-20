var express = require('express');
var app = express();
var fs = require('fs')

app.use(express.urlencoded());
app.use(express.json());

const cors = require('cors')
app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE']
}))

// Getting Item List
app.get('/items', (req,res) => {
    fs.readFile(__dirname + "/" + "items.json", 'utf8',(err,data) =>{
        res.send(data)

    });
})
// Getting Order Item
app.get('/orders', (req,res) => {
    fs.readFile(__dirname + "/" + "final_order_item.json", 'utf8',(err,data) =>{
        res.send(data)

    });

})
// Post call Adding New Item
app.post('/items', (req, res)=>{
    fs.readFile(__dirname + "/" + "items.json", 'utf8', function(err, data){
       let newData = JSON.parse(data).items
        newData.splice(newData.length, 0, req.body.items);
        res.send({items:newData});
    });
})

app.listen(3001, function () {
  console.log('App successfully running on port 3001!');
});