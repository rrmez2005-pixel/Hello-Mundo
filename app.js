//Import the express module
import express from 'express';

//create and instance of an express application
const app = express();

//define the port number where our server will listen
const PORT = 3000;

//define the root patch
app.get('/', (req, res) => {
  res.send('Hola, Mundo!');
})


//Start the server and tell it listen on the port
//Specified above. Note the backticks!
app.listen(PORT, () => {
  console.log (`Server is running at http://localhost:${PORT}`);
})