import fs from 'fs/promises';
import path from 'path';
import { generateShortHash, getMarkdownFiles, getRawMarkdownContent } from '../lib/utils';

async function generateHashes() {
  const files = await getMarkdownFiles();
  const hashes = {};

  for (const file of files) {
    const content = await getRawMarkdownContent(file);
    const hash = generateShortHash(content);
    hashes[file] = hash;
  }

  // Sort the hashes object by filename
  const sortedHashes = Object.fromEntries(
    Object.entries(hashes).sort(([a], [b]) => a.localeCompare(b))
  );

  // Write the hashes to a JSON file
  const hashesPath = path.join(process.cwd(), 'src', 'content-hashes.json');
  await fs.writeFile(hashesPath, JSON.stringify(sortedHashes, null, 2));

  console.log('Content hashes have been generated and saved to content-hashes.json');
}

generateHashes().catch(console.error);
