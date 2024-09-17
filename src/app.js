const express = require('express');
const app = express();
app.use("/", (req, res) => {
    res.send('<h1>Hello from server</h1>');
    res.end();
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});