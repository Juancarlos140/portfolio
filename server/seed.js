require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

const MONGO_URI = process.env.MONGO_URI;


const sampleProjects = [
  {
    title: 'Mapp App',
    description: 'My team and I created an application that relpicates a social media messaging app with an interactive world map.',
    techStack: ['Python', 'Alpaca API', 'React', 'MongoDB'],
    demoLink: 'https://github.com/alex-305/map-app',
    sourceCode: 'https://github.com/alex-305/map-app',
  },
  {
    title: 'Secure Document Management',
    description: ' collaborated with a group in order to create a full-stack application which functions as a Secure Document Management System (SDMS)',
    techStack: ['React', 'Tailwind', 'Express', 'MongoDB'],
    demoLink: 'https://github.com/IskaIV/Secure-Document-Management-System',
    sourceCode: 'https://github.com/IskaIV/Secure-Document-Management-System',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal website to showcase my skills and contact info.',
    techStack: ['React', 'Tailwind', 'Express', 'MongoDB'],
    demoLink: 'https://github.com/Juancarlos140/portfolio',
    sourceCode: 'https://github.com/Juancarlos140/portfolio',
  },
  // Add as many as you want
];

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB');
  await Project.deleteMany(); // Optional: clears old data
  await Project.insertMany(sampleProjects);
  console.log('Sample projects added');
  mongoose.disconnect();
})
.catch((err) => {
  console.error('Error seeding data:', err);
});