import { generatePostHashes } from '../lib/utils.js';
import fs from 'fs/promises';
import path from 'path';

async function generateHashesFile() {
  const hashes = await generatePostHashes();
  const output = hashes.map(({ filename, hash }) => `${filename}: https://blog.wihi.cc/${hash}`).join('\n');
  
  const outputPath = path.join(process.cwd(), 'post-hashes.txt');
  await fs.writeFile(outputPath, output);
  
  console.log('Post hashes and links have been generated and saved to static/post-hashes.txt');
}

generateHashesFile();
