const isEqual = require('lodash/isEqual');
const express = require('express');
const { createFileWithTime, readFilesInDateFolder } = require('./fs-utils.js');
const obj1 = {
    name: 'Ulaga',
    role: 'Developer & Tester',
    hobbies: ['coding', 'sleeping'],
};
const obj2 = {
    hobbies: ['codingss', 'sleeping'],
    role: 'Developer',
    name: 'Nathan',
};

console.log('Are the objects equal? ', isEqual(obj1, obj2));  // Outputs: true

const app = express();

// Endpoint to create a new file with the current time in the current date folder
app.get('/create-file', (req, res) => {
    const filePath = createFileWithTime();
    res.send({ msg: `File created successfully at path: ${filePath}` });
});

// Endpoint to read files from the current date folder
app.get('/read-files', (req, res) => {
    const files = readFilesInDateFolder();
    res.send(files);
});

app.listen(5000, () => {
    console.log('APIs Listening on port 5000');
});
