import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import * as ROUTES from '../constants/routes';
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0);
  const [modalIsShowed, setModalIsShowed] = useState(false);
  return (
    <>
      <Container>
        <MediaDetails>
          <ProductImg
            src="https://cdn0.fahasa.com/media/catalog/product/8/9/8934974186205.jpg"
            alt=""
          />
          <ProductActions>
            <button onClick={() => setModalIsShowed(true)}>
              Thêm vào giỏ hàng
            </button>
            <button>Mua ngay</button>
          </ProductActions>
        </MediaDetails>
        <InfoDetails>
          <ProductTitle>Chainsaw Man - Tập 10 - Tặng Kèm Lót Ly</ProductTitle>
          <ProductPrices>
            <ProductNewPrice>38.250 đ </ProductNewPrice>
            <ProductOldPrice>45.000 đ</ProductOldPrice>
            <ProductSaleOff>-15%</ProductSaleOff>
          </ProductPrices>
          <QuantityActions>
            <span>Số lượng:</span>
            <div>
              <button
                onClick={() => setQuantity((prev) => prev - 1)}
                disabled={quantity === 0}
              >
                <img
                  src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_minus2x.png"
                  alt=""
                />
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>
                <img
                  src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png"
                  alt=""
                />
              </button>
            </div>
          </QuantityActions>
        </InfoDetails>
      </Container>
      {modalIsShowed && (
        <div>
          <Backdrop onClick={() => setModalIsShowed(false)} />
          <Modal>
            <p>Sản phẩm đã được thêm thành công vào giỏ hàng của bạn</p>
            <img
              src="https://cdn0.fahasa.com/media/catalog/product/8/9/8934974186205.jpg"
              alt=""
            />

            <div>
              <button onClick={() => setModalIsShowed(false)}>Chọn thêm</button>
              <Link to={ROUTES.CHECKOUT}>Thanh toán</Link>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default ProductDetails;

const Container = styled.div`
  max-width: 1230px;
  background-color: #fff;
  margin: 90px auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  padding: 20px;
  column-gap: 100px;
`;

const MediaDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoDetails = styled.div``;

const ProductImg = styled.img`
  max-width: 100%;
  max-height: 392px;
`;

const ProductActions = styled.div`
  margin-top: 20px;
  display: flex;
  column-gap: 20px;

  button {
    height: 44px;
    width: 220px;
    border-radius: 8px;
    border: none;
    background: #fff;
    font-weight: 900;
  }

  button:first-child {
    border: 2px solid #2ee5ab;
    color: #2ee5ab;
  }

  button:nth-child(2) {
    background-color: #2ee5ab;
    color: #fff;
  }
`;

const ProductTitle = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: #333;
  line-height: 1.5em;
  overflow-wrap: break-word;
  padding-bottom: 16px;
  margin: 50px 0;
`;

const ProductPrices = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;

  span {
    font-size: 18px;
    font-weight: 650;
    padding: 0 8px 0 0;
    margin-bottom: 0;
    text-align: left;
    max-width: 200px;
    min-width: 150px;
  }

  div {
    border: 1px solid #c1c1c1;
    border-radius: 4px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 5px;
    width: 110px;
    padding: 0 10px;
    button {
      border: none;
      outline: none;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 10px;
      }
    }
  }
`;

const ProductNewPrice = styled.span`
  font-size: 32px;
  line-height: 32px;
  color: #c92127;
  font-family: 'Roboto', sans-serif !important;
  font-weight: 700;
`;

const ProductOldPrice = styled.span`
  text-decoration: line-through;
  margin-left: 8px;
  color: #0d0e0f;
  font-weight: 300;
  padding-left: 5px;
`;

const ProductSaleOff = styled.span`
  margin-left: 8px;
  padding: 4px;
  border-radius: 4px;
  background-color: #c92127;
  color: #fff;
  font-size: 1em;
  font-weight: 600;
`;

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 306px;
  height: 306px;
  background: #fff;
  z-index: 10000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 50%;
  }

  p {
    text-align: center;
  }

  div {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    button,
    a {
      width: 40%;
      background-color: #2ee5ab;
      border: none;
      height: 25px;
      font-size: 15px;
      color: #fff;
      font-weight: 600;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;
