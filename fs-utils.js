import fs from 'fs';
import path from 'path';

// Base directory named 'files'
const baseDirectory = path.join(process.cwd(), 'files');

// Ensure the base 'files' directory exists
if (!fs.existsSync(baseDirectory)) {
    fs.mkdirSync(baseDirectory);
}

// Function to create a new folder with the current date
export const createDateFolder = () => {
    const dateFolderName = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const dateFolderPath = path.join(baseDirectory, dateFolderName);

    if (!fs.existsSync(dateFolderPath)) {
        fs.mkdirSync(dateFolderPath);
        console.log(`Folder "${dateFolderName}" created successfully.`);
    } else {
        console.log(`Folder "${dateFolderName}" already exists.`);
    }

    return dateFolderPath;  // Return the path of the created folder
};

// Function to create a new file with the current time inside the date folder
export const createFileWithTime = () => {
    const dateFolderPath = createDateFolder();  // Ensure the date folder is created
    const timeFileName = new Date().toISOString().split('T')[1].replace(/[:.]/g, '-'); // HH-MM-SS
    const filePath = path.join(dateFolderPath, `${timeFileName}.txt`);

    const content = `File created at ${new Date().toISOString()}`;

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`File "${timeFileName}.txt" created successfully in folder "${dateFolderPath}"`);

    return filePath;  // Return the path of the created file
};

// Function to read the contents of all files within the date folder
export const readFilesInDateFolder = () => {
    const dateFolderName = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const dateFolderPath = path.join(baseDirectory, dateFolderName);

    try {
        const files = fs.readdirSync(dateFolderPath);
        let fileContents = [];

        files.forEach(file => {
            const filePath = path.join(dateFolderPath, file);
            if (fs.lstatSync(filePath).isFile()) {
                const content = fs.readFileSync(filePath, 'utf8');
                fileContents.push({ file, content });
            }
        });

        return fileContents;
    } catch (err) {
        console.error('Error reading the folder:', err);
        return [];
    }
};
