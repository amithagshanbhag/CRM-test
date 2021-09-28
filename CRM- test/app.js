const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
//const PORT = process.env.PORT || 3001;


router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/client/src/Containers/Login.html'));
  //__dirname : It will resolve to your project folder.
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


app.use("/", router);
app.listen(process.env.port || 3001);
console.log("Running at Port 3001");