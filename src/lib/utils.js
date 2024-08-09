import { createHash } from 'crypto';
import fs from 'fs/promises';
import path from 'path';

export async function generatePostHashes() {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const files = await fs.readdir(postsDirectory);
  
  const hashes = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const content = await fs.readFile(filePath, 'utf-8');
      const hash = generateShortHash(content);
      return { filename, hash };
    })
  );

  return hashes;
}

export function generateShortHash(content, length = 12) {
  // Use SHA-256 for a good balance of speed and collision resistance
  const fullHash = createHash('sha256').update(content).digest('hex');
  
  // Take the first 'length' characters of the hash
  return fullHash.slice(0, length);
}
