export async function loader({ params }) {
  const productId = params.productID;
  return fetch('http://localhost:8080/products/' + productId)
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      return resData.product;
    })
    .catch((err) => {
      console.log(err);
    });
}
