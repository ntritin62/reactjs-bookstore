export async function action({ request }) {
  const data = await request.json();
  console.log(data);
}
