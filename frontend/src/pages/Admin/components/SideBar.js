import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const SideBar = () => {
  return (
    <Container>
      <img src="/images/logo.svg" alt="" />
      <NavLink
        to="/admin/products"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Sản phẩm
      </NavLink>
      <NavLink
        to="/admin/orders"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Đơn hàng
      </NavLink>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  grid-area: sidebar;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 100vh;
  padding: 20px 0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  img {
    width: 100px;
    height: 100px;
    margin-bottom: 50px;
  }
  a {
    display: block;
    width: 80%;
    height: 40px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333333;
    transition: all 200ms ease-in;
  }
  .active {
    background-color: #004aad;
    color: #fff;
  }
`;
