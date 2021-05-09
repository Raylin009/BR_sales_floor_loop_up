const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('./dist', {
  index: "index.html"
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/item-info',(req, res)=>{
  console.log(req.query)
  res.send('made it')
})