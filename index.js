import express from 'express';
const app = express();

app.get('/teste', (req, res)=> {
  return res.json({hello: 'world'});
});

//aaa nova alteracao
app.listen(3333);