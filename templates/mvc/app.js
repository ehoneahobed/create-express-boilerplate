const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import routes
const routes = require('./routes');

// Use routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
