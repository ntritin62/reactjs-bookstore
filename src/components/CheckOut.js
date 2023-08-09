import React from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
const CheckOut = () => {
  const prodQty = useSelector((state) => state.cart.products.length);

  return (
    <Container>
      <Badge>
        <img src="/images/cart.svg" alt="" />
        {prodQty !== 0 && <span>{prodQty}</span>}
      </Badge>
      <span>Giỏ hàng</span>
    </Container>
  );
};

export default CheckOut;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Badge = styled.div`
  position: relative;

  span {
    position: absolute;
    width: 15px;
    height: 15px;
    font-size: 11px;
    top: -5px;
    right: -10px;
    border-radius: 50%;
    background-color: red;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
`;
