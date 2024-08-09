import { error } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
  console.log('Request received for:', event.url.pathname);
  
  try {
    const response = await resolve(event);
    
    if (response.status === 404) {
      throw error(404, 'Page not found');
    }
    
    return response;
  } catch (err) {
    console.error('Error in hooks:', err);
    throw error(404, 'Page not found');
  }
}