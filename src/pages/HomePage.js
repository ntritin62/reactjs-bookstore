import React, { useContext } from 'react';
import { styled } from 'styled-components';
import LeftSide from '../components/Category';

const HomePage = () => {
  return (
    <Container>
      <LeftSide />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-areas: 'leftside main';
  grid-template-columns: minmax(0, 2fr) minmax(0, 5fr);
  max-width: 1230px;
  height: 1000px;
  margin: 90px auto;
`;

export default HomePage;
