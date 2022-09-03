import fs from 'fs';
import path from 'path';

// load process env - may not need in prod
// load config
const __dirname = path.resolve();
console.log(__dirname)


export const removeDirectoryContents = (directoryName) => {
    // joining path of directory
    const directoryPath = path.join(__dirname, `../../${directoryName}`);
    // remove images from temp-images directory
    fs.readdir(directoryPath, (err, files) => {
        //handling error
        if (err) return console.log(`Unable to scan directory: ${err}`);
        if (files.length === 0)
        return console.log(
            `The folder cannot be scanned because it does not contain any contents`
        );

        // loop through file list and delete temporary files using fs.rm
        files.forEach((file) => {
        fs.rm(path.join(__dirname, `../../${directoryName}/${file}`), (err) => {
            if (err) console.error(err);
        });
        });
    });
}