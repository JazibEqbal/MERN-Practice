const express = require('express');
require('./db/mongoose')
const contestRouter = require('./routers/contests');
const questionRouter = require('./routers/questions');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(contestRouter);
app.use(questionRouter);

port = process.env.PORT || 3005;
app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})

