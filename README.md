# npm-res-status-handler


# express-res-status-handler

`express-res-status-handler` is an npm package for handling various response statuses in an Express server with custom middleware. 

# Installation

```bash
npm i express-res-status-handler
```

## Usage example

Import the package

```bash
import customResponsesMiddleware from 'express-res-status-handler';
```

## Import the config file
```bash
import { myConfig } from './config/myconfig.js'; 
```

## Use the middleware to configure
```bash
const resConfig = [myConfig] # Initialize your multiple config files
app.use(customResponsesMiddleware(resConfig)); 
```

## Your config sample json files
```Difine your multiple config files```

```bash
const myConfig = {
    custom: {
        error: false,
        code: 200,
        message: "success",
        response: null,
        count: 0,
        pagination: {}
      }
  };
  
  export {myConfig}
```

## Use your custom responses
```bash
# Example route using 'custom' configuration
app.get('/custom', (req, res) => {
  res.custom({ message: 'My custom response messages' });
});

```


# Sample code:
```bash
import express from 'express';
import customResponsesMiddleware from 'express-res-status-handler';

import { myConfig } from './config/myconfig.js'; #import your custom config

const app = express();

# Use customResponsesMiddleware with multiple configuration files
app.use(customResponsesMiddleware([myConfig]));

# Example route using existing keys
app.get('/success', (req, res) => {
  res.success({ message: 'Config herer done' });
});

# Example route using 'custom' configuration
app.get('/custom', (req, res) => {
  res.custom({ message: 'Custom response message' });
});

#Run App
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

```

## ```Default Response Message```

```bash

/ Example route using existing keys
app.get('/success', (req, res) => {
  res.success({ message: 'Config here done' });
});

app.get('/custom', (req, res) => {
  res.custom({ message: 'My custom response messages' });
});

app.get('/forbidden', (req, res) => {
  res.forbidden({ message: 'Access forbidden' });
});

app.get('/unauthorized', (req, res) => {
  res.unauthorized({ message: 'Unauthorized access' });
});

app.get('/not-found', (req, res) => {
  res.notFound({ message: 'Resource not found' });
});

app.get('/internal-error', (req, res) => {
  res.internalServerError({ message: 'Internal server error' });
});

app.get('/redirect', (req, res) => {
  res.redirect({ message: 'Redirecting', location: 'https://example.com' });
});

app.get('/timeout', (req, res) => {
  res.timeout({ message: 'Request timeout' });
});

```
