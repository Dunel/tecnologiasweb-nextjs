import axios from "axios";

export async function GET(req, { params }) {
  try {
    const { idSearch } = params;

    if (!idSearch) {
      return new Response(
        JSON.stringify({ error: "Se requiere un parámetro idSearch" }),
        {
          status: 400,
        }
      );
    }

    const API_KEY = "44615112-06606cc9485516eb8d694bc4c";

    const res = await axios.get("https://pixabay.com/api/", {
      params: {
        key: API_KEY,
        q: idSearch,
        lang: "es",
      },
    });

    return new Response(
      JSON.stringify({ results: res.data }),
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
