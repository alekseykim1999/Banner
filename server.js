const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')
const port = process.env.PORT || 5000;

app.get('/express_backend', async (req, res) => {
    fs.readFile(path.resolve(__dirname, 'WorkersData.txt'), 'utf8' , (err, data) => 
    {
        if (err) {
          console.error(err)
          return
        }

        var arr = [];
        var y = data.split(/\r?\n/);
        const name="name";
        const status="status";
        const imgPath="imagePath";
        for(var i = 0; i < y.length ; i++)
        {
          var obj = {};
          var currentWorker = y[i].toString().split("-");
          obj[name] = currentWorker[0];
          obj[status] = currentWorker[1];
          obj[imgPath] = currentWorker[2];
          arr.push(obj)
        }

        var jsonString = JSON.stringify(arr);
        res.send(jsonString)
      })
      
})

app.listen(port, console.log(`Listening on port ${port}`));


