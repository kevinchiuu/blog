import { generateShortHash, getRawMarkdownContent } from '$lib/utils';
import { createHash } from 'crypto';
import fs from 'fs/promises';
import path from 'path';

import { error } from '@sveltejs/kit';
import { getContentHashes } from '$lib/utils';

export async function load({ params }) {
	const contentHashes = await getContentHashes();
	const file = Object.keys(contentHashes).find(file => contentHashes[file] === params.slug);

  console.log("[slug]+page.server.js file:", file);

	if (file) {

    console.log("[slug]+page.server.js inside the (file)?")

		const post = await import(`../../posts/${file}`);

		console.log("post: ", post);

		return {
			content: post.default.render().html,
			metadata: post.metadata
		}
	}

	throw error(404, 'Post not found');
}

export async function entries() {
	const contentHashes = await getContentHashes();
	return Object.values(contentHashes).map(hash=>({slug: hash}));
}

load.js = ({ component, metadata }) => {
	return {
		component: JSON.parse(JSON.stringify({ $$typeof: 'c' })),
		metadata
	};
};
