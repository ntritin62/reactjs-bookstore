import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import LeftSide from '../../components/Category';
import Main from '../../components/Main';
import { useLoaderData } from 'react-router-dom';

// const DUMMY_BOOKS = [
// {
//   id: '1',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Alice In Borderland - Tập 14 - Tặng Kèm Card Giấy',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_19482023_024811_1.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '2',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/b/l/bluelock_bia_tap-12-1.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '3',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '4',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '4',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '1',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Alice In Borderland - Tập 14 - Tặng Kèm Card Giấy',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_19482023_024811_1.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '2',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/b/l/bluelock_bia_tap-12-1.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '3',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '4',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '4',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '1',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Alice In Borderland - Tập 14 - Tặng Kèm Card Giấy',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_19482023_024811_1.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '2',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/b/l/bluelock_bia_tap-12-1.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '3',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '4',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '4',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '1',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Alice In Borderland - Tập 14 - Tặng Kèm Card Giấy',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_19482023_024811_1.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '2',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/b/l/bluelock_bia_tap-12-1.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '3',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '4',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '4',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '1',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Alice In Borderland - Tập 14 - Tặng Kèm Card Giấy',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_19482023_024811_1.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '2',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/b/l/bluelock_bia_tap-12-1.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '3',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '4',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '4',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/8/9/8935278607311.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// {
//   id: '1',
//   price: 71500,
//   oldprice: 110000,
//   title: 'Alice In Borderland - Tập 14 - Tặng Kèm Card Giấy',
//   saleoff: 35,
//   imgURL:
//     'https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_19482023_024811_1.jpg',
//   category: 'thieu-nhi',
//   stars: '',
// },
// ];
let filteredBooks = [];
let filteredBooksByPrice = [];
let filteredBooksByCategory = [];

const HomePage = () => {
  const initialBooks = useLoaderData();

  const [books, setBooks] = useState(initialBooks);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);

  const PriceChangeHandler = (price) => {
    setPrice(price);
  };

  const CategoryChangeHandler = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    if (price) {
      const prices = price.split('-');
      const min = parseFloat(prices[0]);
      const max = parseFloat(prices[1]);
      filteredBooksByPrice = initialBooks.filter((book) =>
        max ? book.price >= min && book.price <= max : book.price >= min
      );
    }

    if (category) {
      filteredBooksByCategory = initialBooks.filter(
        (book) => book.category === category
      );
    }
    if (price || category) {
      if (!price) {
        filteredBooks = filteredBooksByCategory;
      } else if (!category) {
        filteredBooks = filteredBooksByPrice;
      } else {
        filteredBooks = filteredBooksByCategory.filter((item) =>
          filteredBooksByPrice.includes(item)
        );
      }

      console.log('filteredBooks', filteredBooks);
      setBooks(filteredBooks);
    }
  }, [price, category]);

  return (
    <Container>
      <LeftSide
        onPriceChange={PriceChangeHandler}
        onCategoryChange={CategoryChangeHandler}
      />
      {console.log('books', books)}
      <Main books={books} />
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
  column-gap: 20px;

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
  }
`;
export default HomePage;
