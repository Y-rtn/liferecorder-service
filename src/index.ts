const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.get('/api', (req: any, res: any) => {
  res.send('Hello from LifeRecorderService!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
