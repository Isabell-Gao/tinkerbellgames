const express = require('express');
const path = require('path');
const app = express();

//Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

//Define a rout for the root URL
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Satart a server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running speedily on http://localhost:${PORT}`)
});