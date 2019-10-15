import express from 'express';
const app = express();

app.get('/teste', (req, res)=> {
  return res.json({hello: 'world'});
});

//aaa
app.listen(3333);