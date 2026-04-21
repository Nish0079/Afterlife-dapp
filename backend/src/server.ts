import cors from 'cors';
import express from 'express';
import afterlifeRoutes from './routes/afterlifeRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    name: 'After Life dApp API',
    status: 'running',
  });
});

app.use('/api/afterlife', afterlifeRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
