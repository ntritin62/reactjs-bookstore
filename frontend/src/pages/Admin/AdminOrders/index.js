import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useLoaderData } from 'react-router-dom';
const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

const AdminOrders = () => {
  const orderData = useLoaderData();
  const [ordersList, setOrdersList] = useState(orderData);

  return (
    <Container>
      <OrdersList>
        {ordersList.map((order) => (
          <OrdersItem key={order._id}>
            <button
              onClick={() => {
                fetch('http://localhost:8080/admin/update-order/' + order._id, {
                  method: 'PUT',
                })
                  .then((res) => {
                    return res.json();
                  })
                  .then((resData) => {
                    const newOrders = ordersList.filter(
                      (oldOrder) => order._id !== oldOrder._id
                    );
                    setOrdersList(newOrders);
                  })
                  .catch((err) => {});
              }}
            >
              GIAO HÀNG
            </button>
            <ProductList>
              {order.cart.products.map((product) => (
                <ProductItem key={product._id}>
                  <img src={product.imageURL} alt="" />
                  <ProductInfo>
                    <span>{product.title}</span>
                    <span>Số lượng: {product.quantity}</span>
                  </ProductInfo>
                  <ProductPrice>
                    {VND.format(product.price * product.quantity)}
                  </ProductPrice>
                </ProductItem>
              ))}
            </ProductList>
            <OrderInfo>
              <ReceiverInfo>
                <span>{order.receiver.name}</span>
                <span>Địa chỉ: {order.receiver.address}</span>
                <span>Số điện thoại: {order.receiver.phoneNumber}</span>
              </ReceiverInfo>
              <OrderPrice>
                Tổng tiền: {VND.format(order.cart.totalPrice)}
              </OrderPrice>
            </OrderInfo>
          </OrdersItem>
        ))}
      </OrdersList>
    </Container>
  );
};

export default AdminOrders;

const Container = styled.div`
  grid-area: main;
  padding: 100px 20px;
`;

const OrdersItem = styled.div`
  width: 100%;
  background: #fff;
  margin-bottom: 20px;
  padding: 20px 20px;
  border-radius: 5px;
  button {
    cursor: pointer;
    display: block;
    border: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #004aad;
    color: #fff;
    font-weight: 600;
    margin-left: auto;
  }
`;

const OrdersList = styled.div`
  width: 100%;
  height: auto;
  font-size: 14px;
  height: 500px;
  border: 5px solid rgba(0, 0, 0, 0.09);
  overflow: scroll;
  padding: 20px;
`;

const ProductList = styled.div``;

const ProductItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  border-bottom: 1px solid rgb(235, 235, 240);
  padding: 20px 0;
  img {
    width: 80px;
    height: 80px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductPrice = styled.span`
  text-align: right;
`;

const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ReceiverInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span:first-child {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const OrderPrice = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
