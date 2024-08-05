import express from 'express';

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from LifeRecorderService!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
