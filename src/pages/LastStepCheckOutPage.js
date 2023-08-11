import React from 'react';
import { styled } from 'styled-components';
import UserForm from '../components/UserForm';
import Payment from '../components/Payment';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import CartCheck from '../components/CartCheck';
const LastStepCheckOutPage = () => {
  return (
    <>
      <Container>
        <LayOut>
          <Title>địa chỉ nhận hàng</Title>
          <UserForm />
        </LayOut>
        <LayOut>
          <Title>PHƯƠNG THỨC THANH TOÁN</Title>
          <Payment />
        </LayOut>
        <LayOut>
          <Title>kiểm tra lại đơn hàng</Title>
          <CartCheck />
        </LayOut>
      </Container>
      <CTAActions>
        <div>
          <Link to={ROUTES.CHECKOUT}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="btn_back"
              width="21.62"
              height="16"
              viewBox="0 0 21.62 16"
            >
              <path
                id="Path_5"
                data-name="Path 5"
                d="M22.775,21.47H6.985l4.437-4.437a1.319,1.319,0,1,0-1.866-1.866L2.867,21.856a1.3,1.3,0,0,0,0,1.866l6.666,6.666a1.318,1.318,0,0,0,1.866,0,1.3,1.3,0,0,0,0-1.866L6.985,24.109h15.79a1.32,1.32,0,1,0,0-2.639Z"
                transform="translate(-2.475 -14.775)"
                fill="#212121"
              />
            </svg>
            <span>Quay về giỏ hàng</span>
          </Link>

          <button>Xác nhận thanh toán</button>
        </div>
      </CTAActions>
    </>
  );
};

export default LastStepCheckOutPage;

const Container = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  margin-top: 100px;
`;

const LayOut = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 10px;
  &:last-child {
    margin-bottom: 150px;
  }
`;

const Title = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-size: 1.1em;
  font-weight: 600;
  border-bottom: 1px solid #ced4da;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const CTAActions = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  width: 100%;
  padding: 8px 16px;
  box-shadow: 0px -4px 10px -4px rgba(0, 0, 0, 0.66);
  padding: 30px 0;
  div {
    max-width: 1230px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      column-gap: 10px;
      span {
        cursor: pointer;
        user-select: none;
        color: #555555;
        font-weight: 600;
        font-size: 15px;
      }
    }
    button {
      background: #2ee5ab;
      color: white;
      border: none;
      width: 250px;
      height: 50px;
      border-radius: 10px;
      color: black;
      font-weight: 700;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;
