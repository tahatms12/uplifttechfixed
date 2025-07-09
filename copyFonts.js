import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, 'node_modules', '@fontsource', 'poppins', 'files');
const destDir = path.join(__dirname, 'public', 'fonts');

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error('Error reading source directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.includes('-normal.woff2')) {
            const sourcePath = path.join(sourceDir, file);
            const destPath = path.join(destDir, file);
            fs.copyFile(sourcePath, destPath, (err) => {
                if (err) {
                    console.error(`Error copying ${file}:`, err);
                } else {
                    console.log(`Copied ${file} to ${destDir}`);
                }
            });
        }
    });
});