import { generateShortHash } from '$lib/utils';
import { createHash } from 'crypto';
import fs from 'fs/promises';
import path from 'path';

export async function load({ params }) {
  console.log('load() function called with params:', params);

  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  console.log('Posts directory:', postsDirectory);

  try {
    const files = await fs.readdir(postsDirectory);
    console.log('Files in posts directory:', files);

    for (const filename of files) {
      const filePath = path.join(postsDirectory, filename);
      const content = await fs.readFile(filePath, 'utf-8');
      const hash = generateShortHash(content)
      
      console.log(`Hash for ${filename}:`, hash);
      
      if (hash === params.slug) {
        console.log('Match found for:', filename);
        return { content, filename };
      }
    }
  } catch (err) {
    console.error('Error in load function:', err);
    throw error(500, 'Internal Server Error');
  }
  
  console.log('No matching post found');
  throw error(404, 'Post not found');
}
