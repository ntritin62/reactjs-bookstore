import React from 'react';
import { useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { styled } from 'styled-components';

const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

const OrdersPage = () => {
  const orderData = useLoaderData();
  console.log(orderData);
  const user = useSelector((state) => state.user.user);

  return (
    <Container>
      <LeftSide>
        <Account>
          <Avatar>
            <img src="./images/user-order.svg" alt="" />
          </Avatar>
          <Name>{user ? user.name : ''}</Name>
        </Account>
        <OrderIcon>
          <img src="./images/orders-icon.png" alt="" />
          <span>Đơn mua</span>
        </OrderIcon>
      </LeftSide>
      <RightSide>
        <h1>Đơn hàng của tôi</h1>
        <OrdersList>
          {orderData.map((order) => (
            <OrdersItem key={order._id}>
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
      </RightSide>
    </Container>
  );
};

export default OrdersPage;

const Container = styled.div`
  max-width: 1230px;
  margin: 90px auto;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 6fr;
  column-gap: 30px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Account = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 10px 0;
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.09);
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid rgba(0, 0, 0, 0.09);
  width: 50px;
  height: 50px;
  border-radius: 50%;

  img {
    width: 24px;
    height: 24px;
  }
`;

const Name = styled.span`
  color: #333;
  font-weight: 600;
`;

const RightSide = styled.div`
  h1 {
    font-size: 19px;
    line-height: 21px;
    font-weight: 300;
    margin: 20px 0px 15px;
    font-weight: normal;
  }
`;

const OrderIcon = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #ee4d2d;
  column-gap: 20px;
  img {
    width: 20px;
    height: 20px;
  }
`;

const OrdersItem = styled.div`
  width: 100%;
  background: #fff;
  margin-bottom: 20px;
  padding: 0 20px 20px;
  border-radius: 5px;
`;

const OrdersList = styled.div`
  width: 100%;
  height: auto;
  font-size: 14px;
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
