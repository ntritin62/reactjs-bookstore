export async function action({ request }) {
  const data = await request.json();
  return fetch('http://localhost:8080/auth/signup', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((resData) => {
      console.log(resData);
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
}
