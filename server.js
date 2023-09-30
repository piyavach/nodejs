const express = require('express');
// Constants
const PORT = 3000;
const HOST = 'localhost';
const url = 'https://jsonplaceholder.typicode.com/todos/1'

const y_parabola = (x)=>{
  y = 0.5 * x * x
  return y;
}

const doFetch = async (url) => {
  try {
    let res = await fetch(url);

    try {
      return res.json();
    } catch (error) {
      return res.text();
    }
    
  } catch (error) {
    console.log('fetch error', error.message);
  }
}

// App
const app = express();
app.get('/', async (req, res) => {
  res.send('Hello World '+ JSON.stringify( await doFetch(url)));
  // res.send(y_parabola(5));
});
 
app.listen(3000, () => {
  console.log('Start server at port 3000.')
})