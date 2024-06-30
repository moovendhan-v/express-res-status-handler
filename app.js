// config/responseConfig.js

import { basicConfig } from './config/basic.js';
import { responseConfig } from './config/config.js';

const customResponsesMiddleware = (configs = []) => (req, res, next) => {
  // Start with the default response configuration
  let mergedConfig = { ...basicConfig, ...responseConfig };

  // Merge all provided configurations
  configs.forEach((config) => {
    mergedConfig = { ...mergedConfig, ...config };
  });

  // Attach response methods for each key in mergedConfig
  Object.keys(mergedConfig).forEach((key) => {
    res[key] = (overrides = {}) => {
      const responseConfig = { ...mergedConfig[key], ...overrides };
      res.status(responseConfig.code).json(responseConfig);
    };
  });

  next();
};

export default customResponsesMiddleware;
