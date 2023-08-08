import React from 'react';
import { styled } from 'styled-components';
const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

const BookItem = (props) => {
  return (
    <Container>
      <BookImage src={props.BookInfo.imgURL} />
      <BookSale>{props.BookInfo.saleoff}%</BookSale>
      <BookTitle>{props.BookInfo.title}</BookTitle>
      <BookNewPrice>{VND.format(props.BookInfo.price)}</BookNewPrice>
      <BookOldPrice>{VND.format(props.BookInfo.oldprice)}</BookOldPrice>
      <BookStars></BookStars>
    </Container>
  );
};

export default BookItem;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #333333;
  position: relative;
  padding: 10px;
  &:hover {
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  }
`;

const BookImage = styled.img`
  width: 100%;
`;

const BookSale = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #2ee5ab;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #fff;
`;

const BookTitle = styled.h3`
  line-height: 1.4em;
  word-break: break-word;
  font-weight: 400;
  font-size: 14px;
  margin: 10px 0 0;
`;

const BookNewPrice = styled.span`
  color: #c92127;
  font-weight: 800;
  font-size: 18px;
`;

const BookOldPrice = styled.span`
  color: #999999;
  font-size: 12px;
  text-decoration: line-through;
  margin-top: 10px;
`;

const BookStars = styled.span``;
