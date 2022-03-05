const Express = require("express");
const router = require("./api/root");
const districtRouter = require('./api/districtRoutes')
const app = Express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.connect(`mongodb+srv://admin:DizzyAttic99@alpha.7srqq.mongodb.net/test`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>{
    console.log("connection succesful");
});
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/',router)
app.use('/districts/',districtRouter)
app.listen(3000, () => {
    console.log("im up on 3000");
})
