const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const electronicsRoutes = require('./routes/electronicsRoutes'); // Correctly import routes
const fashionRoutes = require('./routes/fashionRoutes');
const groceryRoutes = require('./routes/groceryRoutes');
const kitchenRoutes = require('./routes/kitchenRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = 3001;
const host = '127.0.0.1'; // Localhost

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB URI
// const uri = 'mongodb+srv://anjula:anjula@cluster0.qdvd8.mongodb.net/ecomdb?retryWrites=true&w=majority&appName=Cluster0';
const uri = 'mongodb+srv://anjula:anjula@cluster0.qdvd8.mongodb.net/SHOPNEST?retryWrites=true&w=majority&appName=Cluster0';

// MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process on database connection error
  }
};
connect();

// Health check
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Routes
app.use('/api/electronics', electronicsRoutes); // Use the electronics routes
app.use('/api/fashions', fashionRoutes);
app.use('/api/grocery', groceryRoutes);
app.use('/api/kitchen', kitchenRoutes);
app.use('/api/books', bookRoutes);


// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Handle server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Closing MongoDB connection...');
  await mongoose.connection.close();
  process.exit(0);
});


// Server setup
app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
