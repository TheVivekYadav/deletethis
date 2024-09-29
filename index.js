const express = require('express');
const app = express();

const port = 8080;

app.get('/greet',(req, res)=>{
    res.send("Changes made using github editor");
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});
