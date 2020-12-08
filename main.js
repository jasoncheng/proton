const express = require('express');

const app = new express();

app.get('/', (req, res) => res.send({status: "success", message:"123"}));

app.listen(80, () => console.log('service listening on port 80'));