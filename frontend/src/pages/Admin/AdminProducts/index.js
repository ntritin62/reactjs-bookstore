import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { styled } from 'styled-components';

const AdminProducts = () => {
  const productsData = useLoaderData();
  console.log(productsData);
  return <Container>AdminProducts</Container>;
};

export default AdminProducts;

const Container = styled.div`
  grid-area: main;
  padding: 100px 20px;
`;
