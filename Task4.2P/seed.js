const mongoose = require('mongoose');
// import model in project.js 
const Project = require('./project');

// insert data & save data -1 
// const sampleProject = new Project({
//     title: "Cat",
//     image: "images/ai-generated-8359510_1280",
//     link: "About this cat",
//     description: "Demo description about cat"
// });
// sampleProject.save()
//     .then(() => {
//         console.log("Sample project saved!");
//         mongoose.connection.close();
//     })
//     .catch(err => console.error(err));

// insert serveral >1
const projectsData = [
    {
        title: "pig",
        image: "images/pig-dog-2613125_1280.jpg",
        link: "About this pig",
        description: "Demo description about pig"
    },
    {
        title: "Puppy",
        image: "images/puppy-1047521_1280.jpg",
        link: "About this puppy",
        description: "Demo description about puppy"
    },
    {
        title: "Cat",
        image: "images/ai-generated-8359510_1280",
        link: "About this cat",
        description: "Demo description about cat"
    }
];
Project.insertMany(projectsData)
    .then(() => {
        console.log("Sample projects saved!");
        mongoose.connection.close();
    })
    .catch(err => console.error(err));
