import { generateShortHash, getRawMarkdownContent } from '$lib/utils';
import { createHash } from 'crypto';
import fs from 'fs/promises';
import path from 'path';

import { error } from '@sveltejs/kit';
import { getContentHashes } from '$lib/utils';

import { contentMap } from '$lib/content-map';

import { processMarkdown } from '$lib/markdown';

export async function load({ params, fetch }) {
    console.log('Received slug:', params.slug);
    console.log('Content map:', contentMap);

    const file = Object.entries(contentMap).find(([_, hash]) => hash === params.slug)?.[0];
    
    if (file) {
        console.log('Matching file found:', file);
        try {
            // Fetch the Markdown content
            const response = await fetch(`/posts/${file}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const markdown = await response.text();

            // Process the Markdown content (you'll need to implement this function)
            const { content, metadata } = processMarkdown(markdown);

            return {
                content,
                metadata
            };
        } catch (e) {
            console.error(`Error loading blog post: ${file}`, e);
            throw error(500, 'Error loading blog post');
        }
    }

    console.log('No matching file found for slug:', params.slug);
    throw error(404, 'Post not found');
}

export function entries() {
    return Object.values(contentMap).map(hash => ({ slug: hash }));
}

export const prerender = true;
