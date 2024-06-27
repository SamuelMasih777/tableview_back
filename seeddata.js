const mongoose = require('mongoose');
const Product = require('./model/data.model'); 
const sampleData = require('./sample.json'); 
const connectDB = require('./config/dbconfig');

connectDB();

const seedDatabase = async () => {
  try {
    await Product.deleteMany({});
    console.log('Existing products deleted');
    
    const products = sampleData.map(item => ({
      ...item,
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt)
    }));

    await Product.insertMany(products);
    console.log(`${products.length} products inserted`);

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();