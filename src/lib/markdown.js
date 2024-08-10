import { marked } from 'marked';

export function processMarkdown(markdown) {
    const lines = markdown.split('\n');
    let metadata = {};
    let content = markdown;

    // Check for frontmatter
    if (lines[0] === '---') {
        const endIndex = lines.findIndex((line, index) => index > 0 && line === '---');
        if (endIndex !== -1) {
            const frontmatter = lines.slice(1, endIndex).join('\n');
            metadata = parseFrontmatter(frontmatter);
            content = lines.slice(endIndex + 1).join('\n');
        }
    }

    return {
        content: marked(content),
        metadata
    };
}

function parseFrontmatter(frontmatter) {
    const metadata = {};
    frontmatter.split('\n').forEach(line => {
        const [key, value] = line.split(':').map(part => part.trim());
        if (key && value) {
            metadata[key] = value;
        }
    });
    return metadata;
}