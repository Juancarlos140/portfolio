const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  demoLink: String,
  sourceCode: String,
});

module.exports = mongoose.model('Project', projectSchema);
