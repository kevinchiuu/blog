import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

// async function generateContentMap() {
//   const postsDir = path.join(process.cwd(), 'static', 'posts');
//   console.log('Posts directory:', postsDir);

//   const files = await fs.readdir(postsDir);
//   console.log('Files found:', files);

//   const contentMap = {};

//   for (const file of files) {
//     if (file.endsWith('.md')) {
//       const content = await fs.readFile(path.join(postsDir, file), 'utf-8');
//       const hash = crypto.createHash('sha256').update(content).digest('hex').slice(0, 8);
//       contentMap[hash] = file;
//       console.log(`Generated hash for ${file}: ${hash}`);
//     }
//   }

//   const outputPath = path.join(process.cwd(), 'src', 'lib', 'content-map.js');
//   const outputContent = `export const contentMap = ${JSON.stringify(contentMap, null, 2)};`;
  
//   await fs.writeFile(outputPath, outputContent);

//   console.log('Content map generated successfully.');
// }

// generateContentMap().catch(console.error);


// const postsDirectory = path.join(process.cwd(), 'static', 'posts');
// const outputFile = path.join(process.cwd(), 'src', 'lib', 'content-map.js');

// function generateHash(content) {
//     return crypto.createHash('sha256').update(content).digest('hex').slice(0, 8);
// }

// const contentMap = {};

// fs.readdirSync(postsDirectory).forEach(file => {
//     if (file.endsWith('.md')) {
//         const fullPath = path.join(postsDirectory, file);
//         const content = fs.readFileSync(fullPath, 'utf-8');
//         const hash = generateHash(content);
//         contentMap[file] = hash;
//     }
// });

// const fileContent = `export const contentMap = ${JSON.stringify(contentMap, null, 2)};`;

// fs.writeFileSync(outputFile, fileContent);

// console.log('Content map generated successfully.');


import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const postsDirectory = join(process.cwd(), 'static', 'posts');
const outputFile = join(process.cwd(), 'src', 'lib', 'content-map.js');

function generateHash(content) {
    return createHash('sha256').update(content).digest('hex').slice(0, 8);
}

async function generateContentMap() {
    const contentMap = {};

    try {
        const files = await readdir(postsDirectory);

        for (const file of files) {
            if (file.endsWith('.md')) {
                const fullPath = join(postsDirectory, file);
                const content = await readFile(fullPath, 'utf-8');
                const hash = generateHash(content);
                contentMap[file] = hash;
            }
        }

        const fileContent = `export const contentMap = ${JSON.stringify(contentMap, null, 2)};`;
        await writeFile(outputFile, fileContent);

        console.log('Content map generated successfully.');
    } catch (error) {
        console.error('Error generating content map:', error);
    }
}

generateContentMap();