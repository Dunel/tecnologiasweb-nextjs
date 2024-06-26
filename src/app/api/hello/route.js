
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const world = searchParams.get('world') || 'world';
    return new Response(
      JSON.stringify({ message: `Hello, ${world}` }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
