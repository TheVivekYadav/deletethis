const express = require('express');
const app = express();

const port = 8080;

app.get('/greet',(req, res)=>{
    res.send("Hello All Computer Science Students");
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});