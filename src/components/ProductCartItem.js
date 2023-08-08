import React from 'react';
import { styled } from 'styled-components';
const ProductCartItem = () => {
  return (
    <Container>
      <ProductImage
        src="https://cdn0.fahasa.com/media/catalog/product//b/l/bluelock_bia_tap-12-1.jpg"
        alt=""
      />
      <ProductInfo>
        <ProductTitle>BlueLock - Tập 12 - Tặng Kèm Card PVC</ProductTitle>
        <div>
          <ProductNewPrice>29.750 đ</ProductNewPrice>
          <ProductOldPrice>35.000 đ</ProductOldPrice>
        </div>
      </ProductInfo>
      <ProductQty>
        <div>
          <button
          //   onClick={() => setQuantity((prev) => prev - 1)}
          //   disabled={quantity === 0}
          >
            <img
              src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_minus2x.png"
              alt=""
            />
          </button>
          10
          <button
          // onClick={() => setQuantity((prev) => prev + 1)}
          >
            <img
              src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png"
              alt=""
            />
          </button>
        </div>
      </ProductQty>
      <ProductTotalPrice>125.970 đ</ProductTotalPrice>
      <DeleteButton>
        <img src="/images/trash-can.svg" alt="" />
      </DeleteButton>
    </Container>
  );
};

export default ProductCartItem;

const Container = styled.div`
  background-color: #fff;
  padding: 20px 100px;
  display: grid;
  grid-template-columns: 2fr 5fr 2fr 2fr;
  column-gap: 20px;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #ededed;
  &:last-child {
    border-bottom: none;
  }
`;

const ProductImage = styled.img`
  width: auto;
  max-height: 119px;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
`;

const ProductQty = styled.div`
  /* margin: 0 50px; */
  text-align: center;
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

const ProductTotalPrice = styled.span`
  text-align: center;
  color: #c92127;
  font-weight: bold;
  font-size: 15px;
`;

const ProductOldPrice = styled.span`
  color: #7a7e7f;
  text-decoration: line-through;
  font-size: 0.95em;
  margin-left: 8px;
`;

const ProductNewPrice = styled.span`
  font-size: 1.2em;
  line-height: 1.2em;
  color: #333;
  font-weight: 650;
  text-align: left;
  width: 100%;
`;

const ProductTitle = styled.h2`
  font-size: 14px;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  max-width: 80%;
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  translate: -50% -50%;
  border: none;
  background: transparent;
  img {
    width: 24px;
    height: 24px;
    svg {
      color: #2759ae;
    }
  }
`;
