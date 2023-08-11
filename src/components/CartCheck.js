import React from 'react';
import { styled } from 'styled-components';

const CartCheck = () => {
  return (
    <>
      <Container>
        <div>
          <Image
            src="https://cdn0.fahasa.com/media/catalog/product//c/o/combo-1707202300.jpg"
            alt=""
          />
          <Title>Món Quà Học Tập Tiện Lợi</Title>
        </div>
        <div>
          <Prices>
            <NewPrice>46,899đ</NewPrice>
            <OldPrice>93,500đ</OldPrice>
          </Prices>
          <Quantity>1</Quantity>
          <TotalPrice>46,899đ</TotalPrice>
        </div>
      </Container>
      <Container>
        <div>
          <Image
            src="https://cdn0.fahasa.com/media/catalog/product//c/o/combo-1707202300.jpg"
            alt=""
          />
          <Title>Món Quà Học Tập Tiện Lợi</Title>
        </div>
        <div>
          <Prices>
            <NewPrice>46,899đ</NewPrice>
            <OldPrice>93,500đ</OldPrice>
          </Prices>
          <Quantity>1</Quantity>
          <TotalPrice>46,899đ</TotalPrice>
        </div>
      </Container>
      <Container>
        <div>
          <Image
            src="https://cdn0.fahasa.com/media/catalog/product//c/o/combo-1707202300.jpg"
            alt=""
          />
          <Title>Món Quà Học Tập Tiện Lợi</Title>
        </div>
        <div>
          <Prices>
            <NewPrice>46,899đ</NewPrice>
            <OldPrice>93,500đ</OldPrice>
          </Prices>
          <Quantity>1</Quantity>
          <TotalPrice>46,899đ</TotalPrice>
        </div>
      </Container>
    </>
  );
};

export default CartCheck;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ced4da;
  div {
    display: flex;
  }

  &:last-child {
    border: none;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 145px;
`;

const Title = styled.h3`
  font-weight: normal;
  font-size: 15px;
`;

const Prices = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

const OldPrice = styled.span`
  color: #bfbfbf;
  text-decoration: line-through;
  font-size: 0.95em;
`;

const NewPrice = styled.span``;

const Quantity = styled.span`
  width: 100px;
  text-align: center;
  font-size: 15px;
`;

const TotalPrice = styled.span`
  width: 100px;
  color: #f39801;
  font-weight: 600;
`;
