import { type APIRoute } from 'astro';
import { KOMMENTAR_API_KEY, KOMMENTAR_API_SECRET } from 'astro:env/server';

export const prerender = false;

export const GET: APIRoute = async ({ request, params }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const hostId = params.host;

    const response = await fetch(
      `https://api.kommentar.dev/api/hosts/${hostId}/comments`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': KOMMENTAR_API_KEY,
          'x-api-secret': KOMMENTAR_API_SECRET
        }
      }
    );

    const comments = await response.json();

    return new Response(JSON.stringify(comments), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return new Response(null, { status: 400 });
};

export const POST: APIRoute = async ({ params, request, cookies }) => {
  const hostId = params.host;
  const body = await request.json();

  const response = await fetch(
    `https://api.kommentar.dev/api/hosts/${hostId}/comments`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': KOMMENTAR_API_KEY,
        'x-api-secret': KOMMENTAR_API_SECRET,
        Cookie: `sessionId=${cookies.get('sessionId')!.value}`
      },
      body: JSON.stringify(body)
    }
  );

  const comments = await response.json();

  return new Response(JSON.stringify(comments), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
