import React, { useState } from 'react';
import { styled } from 'styled-components';
import LeftSide from '../components/Category';
const DUMMY_BOOKS = [
  { price: 1500000, category: 'thieu-nhi' },
  { price: 550000, category: 'manga' },
  { price: 350000, category: 'thieu-nhi' },
  { price: 250000, category: 'van-hoc' },
  { price: 150000, category: 'van-hoc' },
  { price: 50000, category: 'manga' },
];
const HomePage = () => {
  const [books, setBooks] = useState(DUMMY_BOOKS);

  const PriceChangeHandler = (min, max) => {
    let filteredByPrice;
    if (books.length === DUMMY_BOOKS) {
      filteredByPrice = DUMMY_BOOKS.filter((book) =>
        max ? book.price >= min && book.price <= max : book.price >= min
      );
    } else {
      filteredByPrice = books.filter((book) =>
        max ? book.price >= min && book.price <= max : book.price >= min
      );
    }
    setBooks(filteredByPrice);
  };

  const CategoryChangeHandler = (category) => {
    let filteredByCategory;
    if (books.length === DUMMY_BOOKS) {
      filteredByCategory = DUMMY_BOOKS.filter(
        (book) => book.category === category
      );
    } else {
      filteredByCategory = books.filter((book) => book.category === category);
    }
    setBooks(filteredByCategory);
  };

  return (
    <Container>
      <LeftSide
        onPriceChange={PriceChangeHandler}
        onCategoryChange={CategoryChangeHandler}
      />
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
