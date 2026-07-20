const express = require('express');
require('dotenv').config();
const { Mongoose } = require('./dbConnect');
const path = require('path');
const fs = require('fs').promises;
const axios = require('axios');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const Academy = require('./models/Academy');
const userRoute = require('./routes/userRoutes');
const academyRoute = require('./routes/academyRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Mini Project 3 API', version: '1.0.0' }
  },
  apis: ['./routes/*.js', './controllers/*.js']
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => res.json({ message: 'mini-project-3' }));
app.use('/users', userRoute);
app.use('/academy', academyRoute);

async function seedDatabase() {
  try {
    const count = await Academy.countDocuments();
    if (count > 0) {
      console.log('Academy collection already seeded; skipping.');
      return;
    }

    let data;
    if (process.env.SEED_API_URL) {
      console.log('Fetching seed data from', process.env.SEED_API_URL);
      const resp = await axios.get(process.env.SEED_API_URL);
      data = resp.data;
    } else {
      const filePath = path.join(__dirname, 'public', 'data.json');
      const raw = await fs.readFile(filePath, 'utf8');
      data = JSON.parse(raw);
      console.log('Loaded seed data from local public/data.json');
    }

    const doc = {
      academyName: data.academyName || data.name,
      established: data.established,
      isActive: data.isActive,
      news: data.news || [],
      philosophers: data.philosophers || []
    };

    await Academy.create(doc);
    console.log('Database seeded.');
  } catch (err) {
    console.error('Seeding error:', err.message);
  }
}

Mongoose.connection.once('open', () => {
  console.log('DB open — running seed check');
  seedDatabase();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});