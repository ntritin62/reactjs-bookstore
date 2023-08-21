import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';
import { styled } from 'styled-components';
const AdminLayout = () => {
  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  );
};

export default AdminLayout;

const Container = styled.div`
  display: grid;
  grid-template-areas: 'sidebar main';
  width: 100%;
  grid-template-columns: 1fr 4fr;
`;
