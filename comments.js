// Create web server
// Start web server
// Listen for requests
// Handle requests
// Respond to requests

// Create a web server
const express = require('express');
const app = express();

// Start web server
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Listen for requests
// app.get();
// app.post();
// app.put();
// app.delete();

// Handle requests
// app.get();
// app.post();
// app.put();
// app.delete();

// Respond to requests
// app.get('/', (req, res) => {
//     res.send('Hello World!!!');
// });

// app.get('/api/courses', (req, res) => {
//     res.send([1, 2, 3]);
// });

// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params.id);
// });

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);
// });

// app.post();
// app.put();
// app.delete();