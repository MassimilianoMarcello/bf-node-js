// Fill in the blanks to complete the exercises.
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Construct the path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// Write to the file
const contentToSave = 'I am the content to save';
const filePath = path.join(PATH, 'contentSaved.txt');
fs.writeFile(filePath, contentToSave, 'utf8', (err) => {
    if (err) {
        console.error(err);
    }
    console.log('Well done, your content is saved!');
});

// Read from the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log('Read File', data);
});

// Append content to the file
const contentToAppend = 'I am the content you are appending';
fs.appendFile(filePath, contentToAppend, 'utf8', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('You append your text succesufully!');
    }
});

// Delete a file
fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file', err);
    } else {
        console.log('You delete your file succesufully!');
    }
});
