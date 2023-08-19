import { redirect } from 'react-router-dom';
export async function loader() {
  return fetch('http://localhost:8080/products')
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      return resData.products;
    })
    .catch((err) => {
      console.log(err);
    });
}
