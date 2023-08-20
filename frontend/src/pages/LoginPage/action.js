import { redirect } from 'react-router-dom';
export async function action({ request }) {
  let response;
  const data = await request.json();
  return fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => {
      response = res;
      return res.json();
    })
    .then((resData) => {
      if (!response.ok) {
        console.log(resData);
        return resData;
      } else {
        localStorage.setItem('token', resData.token);
        return redirect('../');
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
