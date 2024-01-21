export async function GET() {
  const res = await fetch(" https://api.github.com/users/Orloxx23", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GH_API_KEY}`,
      "X-GitHub-Api-Version": "2022-11-28"
    },
  });
  
  const data = await res.json();

  return Response.json({ data });
}
