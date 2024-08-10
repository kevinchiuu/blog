import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

async function generateContentMap() {
  const postsDir = path.join(process.cwd(), 'static', 'posts');
  console.log('Posts directory:', postsDir);

  const files = await fs.readdir(postsDir);
  console.log('Files found:', files);

  const contentMap = {};

  for (const file of files) {
    if (file.endsWith('.md')) {
      const content = await fs.readFile(path.join(postsDir, file), 'utf-8');
      const hash = crypto.createHash('sha256').update(content).digest('hex').slice(0, 8);
      contentMap[hash] = file;
      console.log(`Generated hash for ${file}: ${hash}`);
    }
  }

  const outputPath = path.join(process.cwd(), 'src', 'lib', 'content-map.js');
  const outputContent = `export const contentMap = ${JSON.stringify(contentMap, null, 2)};`;
  
  await fs.writeFile(outputPath, outputContent);

  console.log('Content map generated successfully.');
}

generateContentMap().catch(console.error);

// import fs from 'fs/promises';
// import path from 'path';
// import crypto from 'crypto';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// async function generateContentMap() {
//   const postsDir = path.join(__dirname, 'posts');
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

//   const outputPath = path.join(__dirname, 'src', 'lib', 'content-map.js');
//   const outputContent = `export const contentMap = ${JSON.stringify(contentMap, null, 2)};`;
  
//   await fs.writeFile(outputPath, outputContent);

//   console.log('Content map generated successfully:', contentMap);
// }

// generateContentMap().catch(console.error);