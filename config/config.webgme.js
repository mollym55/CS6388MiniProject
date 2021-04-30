// DO NOT EDIT THIS FILE
// This file is automatically generated from the webgme-setup-tool.
'use strict';


var config = require('webgme/config/config.default'),
    validateConfig = require('webgme/config/validator');

// The paths can be loaded from the webgme-setup.json
config.plugin.basePaths.push(__dirname + '/../src/plugins');
config.seedProjects.basePaths.push(__dirname + '/../src/seeds/MiniProject');
config.seedProjects.basePaths.push(__dirname + '/../src/seeds/RealMiniProject');



config.visualization.panelPaths.push(__dirname + '/../src/visualizers/panels');


config.rest.components['BindingsDocs'] = {
  src: __dirname + '/../node_modules/webgme-bindings/src/routers/BindingsDocs/BindingsDocs.js',
  mount: 'bindings-docs',
  options: {}
};

// Visualizer descriptors
config.visualization.visualizerDescriptors.push(__dirname + '/../src/visualizers/Visualizers.json');
// Add requirejs paths
config.requirejsPaths = {
  'BindingsDocs': 'node_modules/webgme-bindings/src/routers/BindingsDocs',
  'panels': './src/visualizers/panels',
  'widgets': './src/visualizers/widgets',
  'webgme-bindings': './node_modules/webgme-bindings/src/common',
  'miniproject': './src/common'
};


config.mongo.uri = 'mongodb://127.0.0.1:27017/miniproject';
validateConfig(config);
module.exports = config;
