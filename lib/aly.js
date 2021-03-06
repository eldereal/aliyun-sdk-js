var ALY = require('./core');
module.exports = ALY;

// Load Node HTTP client
require('./http/node');

// Load all service classes
require('./services');

// Reset configuration
ALY.config = new ALY.Config();
