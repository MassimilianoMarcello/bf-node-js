// Fill in the blanks to complete the exercises.
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Construct the path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const contentToSave = 'Hi, i am the content to save';
const filePath = path.join(PATH, 'text.txt');

// Write a File Synchronously:
try {
    fs.writeFileSync(filePath, contentToSave);
    console.log('You write the file successufully!');
} catch (err) {
    console.error(err);
}

// // Read a File Synchronously:
try {
    const data = fs.readFileSync( filePath, 'utf-8');
    console.log('File contents synchronously:', data);
} catch (err) {
    console.error(err);
}

const contentToAppend = '\nThis is an appended line.';
try {
    fs.appendFileSync(filePath, contentToAppend);
    console.log('Success');
} catch (err) {
    console.error(err);
}

// Delete a File Synchronously:
try {
    fs.unlinkSync(filePath);
    console.log('Success');
} catch (err) {
    console.error(err);
}
