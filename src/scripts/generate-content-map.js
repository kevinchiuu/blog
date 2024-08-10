import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

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