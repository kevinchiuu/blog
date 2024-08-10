import { createHash } from 'crypto';
import fs from 'fs/promises';
import path from 'path';

export function generateShortHash(content, length = 12) {
  return createHash('sha256').update(content).digest('hex').slice(0, length);
}

// TODO: change this to a "content / posts" folder not in the src directory
export async function getMarkdownFiles() {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const files = await fs.readdir(postsDirectory);
  return files.filter(file => file.endsWith('.md'));
}

export async function getRawMarkdownContent(filename) {
  const filePath = path.join(process.cwd(), 'src', 'posts', filename);
  return await fs.readFile(filePath, 'utf-8');
}

export async function getContentHashes() {
  const hashesPath = path.join('static', 'content-hashes.json');
  try {
    const hashesContent = await fs.readFile(hashesPath, 'utf-8');
    return JSON.parse(hashesContent);
  } catch (error) {
    console.error('Error reading content hashes:', error);
    return {};
  }
}
