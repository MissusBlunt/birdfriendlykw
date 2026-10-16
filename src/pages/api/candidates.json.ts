import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request }) => {
  const responseData = {
    message: "Hello from Astro API!",
    timestamp: new Date().toISOString(),
  };

return new Response(JSON.stringify(responseData), {
    headers: {
      'content-type': 'application/json',
    },
  });
};