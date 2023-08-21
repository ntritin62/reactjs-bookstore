export async function loader() {
  return fetch('http://localhost:8080/admin/orders')
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      console.log(resData.orders);
      return resData.orders;
    })
    .catch((err) => {
      console.log(err);
    });
}
