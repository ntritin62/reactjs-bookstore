import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import ProductCartItem from '../components/ProductCartItem';
import * as ROUTES from '../constants/routes';

const CheckOutPage = () => {
  return (
    <Container>
      <h1>GIỎ HÀNG</h1>
      <Inner>
        <LeftSide>
          <Header>
            <div>Số lượng</div>
            <div>Thành tiền</div>
          </Header>
          <ProductCartList>
            <ProductCartItem />
            <ProductCartItem />
            <ProductCartItem />
          </ProductCartList>
        </LeftSide>
        <RightSide>
          <TotalPrice>
            <span>Tổng Số Tiền (gồm VAT)</span> 29.750 đ
          </TotalPrice>
          <Link to={ROUTES.LASTSTEPCHECKOUT}>
            <CheckOutBtn>thanh toán</CheckOutBtn>
          </Link>
        </RightSide>
      </Inner>
    </Container>
  );
};

export default CheckOutPage;

const Container = styled.div`
  max-width: 1230px;
  margin: 80px auto 0;
  h1 {
    margin: 0;
    font-weight: 600;
    color: #333333;
    line-height: 20px;
    font-size: 17px;
  }
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 20px;
  column-gap: 15px;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

const LeftSide = styled.div`
  height: auto;
  @media screen and (max-width: 991px) {
    width: 100%;
    max-width: 100%;
  }
`;

const RightSide = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const Header = styled.div`
  padding-left: 30px;
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 10px;
  padding-right: 100px;
  div {
    margin-left: 50px;
    margin-right: 15px;
    font-weight: 600;
    font-size: 15px;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #c92127;
  font-weight: 650;
  font-size: 20px;

  span {
    font-size: 16px;
    color: #333333;
    flex-basis: 65%;
  }
`;

const CheckOutBtn = styled.button`
  width: 100%;
  margin: 20px 0px 0px;
  border: none;
  height: 45px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  background-color: #2ee5ab;
  cursor: pointer;
`;

const ProductCartList = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
`;
