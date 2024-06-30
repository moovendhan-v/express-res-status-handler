function hellowStatusHandler() {
    console.log('Hello From server handler');
  return "hello from browser status handler";
}

import express from 'express';
import customResponsesMiddleware from './app.js'

import { basicConfig } from './config/basic.js';
import { responseConfig } from './config/config.js';


const app = express();

// Use customResponsesMiddleware with multiple configuration files
app.use(customResponsesMiddleware([basicConfig, responseConfig]));

// Example route using existing keys
app.get('/success', (req, res) => {
  res.success({ message: 'Config herer done' });
});

// Example route using 'custom' configuration
app.get('/custom', (req, res) => {
  res.custom({ message: 'Custom response message' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
