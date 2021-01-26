const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());
app.get('/', (req,res) => {
    var obj =[{
        id: 1,
        userId: 4,
        title: "hello",
        completed: true
      },
      {
        id: 2,
        userId: 11,
        title: "hii",
        completed: true
      },
      {
        id: 3,
        userId: 5,
        title: "skol",
        completed: true
      },
    ]
    res.send({obj})
  });

app.listen(3001,() => {
  console.log('LISTENING ON PORT 3001!');
  console.log('jimmyman');
})