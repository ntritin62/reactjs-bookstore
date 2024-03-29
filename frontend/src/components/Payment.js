import React from 'react';
import { styled } from 'styled-components';
const Payment = () => {
  return (
    <>
      <Form>
        <Input type="radio" defaultChecked value="money" />
        <div></div>
        <Label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37.912"
            height="24"
            viewBox="0 0 37.912 24"
          >
            <g id="ico_COD" transform="translate(-2.002 -13.744)">
              <g
                id="Group_882"
                data-name="Group 882"
                transform="translate(2.002 13.743)"
              >
                <g id="Group_881" data-name="Group 881">
                  <g id="Group_880" data-name="Group 880">
                    <g id="Group_879" data-name="Group 879">
                      <path
                        id="Path_465"
                        data-name="Path 465"
                        d="M39.322,16.525H37.688v-2.19a.592.592,0,0,0-.592-.592H2.595A.592.592,0,0,0,2,14.336V34.369a.592.592,0,0,0,.592.592H4.229v2.19a.592.592,0,0,0,.592.592h34.5a.592.592,0,0,0,.592-.592V17.118A.592.592,0,0,0,39.322,16.525Zm-36.134-1.6H36.5V33.777H3.187ZM38.729,36.559H5.413v-1.6H37.1a.592.592,0,0,0,.592-.592V17.71h1.041Z"
                        transform="translate(-2.002 -13.743)"
                      />
                      <path
                        id="Path_466"
                        data-name="Path 466"
                        d="M36.31,21.576a1.731,1.731,0,0,1-1.729-1.728.592.592,0,0,0-.592-.592H9.2a.592.592,0,0,0-.592.592,1.731,1.731,0,0,1-1.73,1.728.592.592,0,0,0-.592.592v8.854a.592.592,0,0,0,.592.592,1.731,1.731,0,0,1,1.73,1.729.592.592,0,0,0,.592.592H33.988a.592.592,0,0,0,.592-.592,1.731,1.731,0,0,1,1.729-1.729.592.592,0,0,0,.592-.592V22.169A.592.592,0,0,0,36.31,21.576Zm-.592,8.915a2.922,2.922,0,0,0-2.261,2.26H9.731a2.921,2.921,0,0,0-2.262-2.26V22.7a2.922,2.922,0,0,0,2.262-2.26H33.457a2.921,2.921,0,0,0,2.261,2.26Z"
                        transform="translate(-3.749 -15.992)"
                      />
                      <path
                        id="Path_469"
                        data-name="Path 469"
                        d="M32.61,24.108h-.649v-.46a.592.592,0,1,0-1.184,0v.462l-1.237,0a.592.592,0,0,0,0,1.184h0l1.235,0v1.09a2.78,2.78,0,0,0-1.668-.563,2.929,2.929,0,0,0,0,5.857,2.773,2.773,0,0,0,1.679-.575.585.585,0,0,0,.578.521.592.592,0,0,0,.592-.592v-5.74h.651a.592.592,0,0,0,0-1.184Zm-3.5,6.388a1.746,1.746,0,1,1,1.668-1.744A1.708,1.708,0,0,1,29.108,30.5Z"
                        transform="translate(-11.887 -17.538)"
                      />
                      <path
                        id="Path_470"
                        data-name="Path 470"
                        d="M30.762,38.447h0l-2.921.011a.592.592,0,0,0,0,1.184h0l2.921-.011a.592.592,0,0,0,0-1.184Z"
                        transform="translate(-12.292 -23.812)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <span>Thanh toán bằng tiền mặt khi nhận hàng</span>
        </Label>
      </Form>
    </>
  );
};

export default Payment;

const Form = styled.form`
  display: flex;
  align-items: center;
  column-gap: 20px;
  div {
    height: 20px;
    width: 20px;
    border: 2px solid #e6e6e6;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  display: none;

  &:checked ~ div {
    border: 2px solid #004aad;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      content: '';
      display: block;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background: #004aad;
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
