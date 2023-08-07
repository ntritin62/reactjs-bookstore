import React from 'react';
import { styled } from 'styled-components';
import BookItem from './BookItem';
import { Link } from 'react-router-dom';
const Main = (props) => {
  return (
    <Container>
      <BooksList>
        {props.books.map((book) => (
          <Link to={`/product/${book.id}`}>
            <BookItem key={book.id} BookInfo={book} />
          </Link>
        ))}
      </BooksList>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  grid-area: main;
  background: #fff;
  padding: 25px 15px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const BooksList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
