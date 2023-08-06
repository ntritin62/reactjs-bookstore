import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import LeftSide from '../components/Category';
const DUMMY_BOOKS = [
  { price: 1500000, category: 'thieu-nhi' },
  { price: 550000, category: 'manga' },
  { price: 350000, category: 'thieu-nhi' },
  { price: 250000, category: 'van-hoc' },
  { price: 550000, category: 'van-hoc' },
  { price: 50000, category: 'manga' },
];
let filteredBooks = [];
const HomePage = () => {
  const [books, setBooks] = useState(DUMMY_BOOKS);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const PriceChangeHandler = (price) => {
    // filteredBooks = filteredBooks.filter((book) =>
    //   max ? book.price >= min && book.price <= max : book.price >= min
    // );
    setPrice(price);
  };

  const CategoryChangeHandler = (category) => {
    // filteredBooks = filteredBooks.filter((book) => book.category === category);
    setCategory(category);
  };
  useEffect(() => {
    let filteredBooksByPrice = [];
    let filteredBooksByCategory = [];
    const prices = price.split('-');
    const min = parseInt(prices[0]);
    const max = parseInt(prices[1]);

    if (price) {
      filteredBooksByPrice = DUMMY_BOOKS.filter((book) =>
        max ? book.price >= min && book.price <= max : book.price >= min
      );
    }
    console.log('filteredBooksByPrice', filteredBooksByPrice);

    if (category) {
      filteredBooksByCategory = DUMMY_BOOKS.filter(
        (book) => book.category === category
      );
      console.log('filteredBooksByCategory', filteredBooksByCategory);
    }

    filteredBooks = filteredBooksByCategory.filter((item) =>
      filteredBooksByPrice.includes(item)
    );
    console.log('books', filteredBooks);
  }, [price, category]);

  useEffect(() => {
    setBooks(filteredBooks);
  }, []);

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
