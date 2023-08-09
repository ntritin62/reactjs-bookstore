import React, { useState } from 'react';
import { styled } from 'styled-components';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [formValidity, setFormValidity] = useState({
    emailValid: true,
    nameValid: true,
    addressValid: true,
    phoneNumberValid: true,
  });
  const SubmitHandler = (event) => {
    event.preventDefault();
    const enteredEmailIsValid = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const enteredNameIsValid = name.length !== '';
    const enteredAddressIsValid = address.length !== '';
    const enteredPhoneNumberIsValid = phoneNumber.length !== '';

    setFormValidity({
      emailValid: enteredEmailIsValid,
      addressValid: enteredAddressIsValid,
      nameValid: enteredNameIsValid,
      phoneNumberValid: enteredPhoneNumberIsValid,
    });
    const formIsValid =
      enteredEmailIsValid &&
      enteredAddressIsValid &&
      enteredNameIsValid &&
      enteredPhoneNumberIsValid;
    if (!formIsValid) {
      return;
    }

    //fetch login

    setEmail('');
    setAddress('');
    setName('');
    setPhoneNumber('');
    setFormValidity({
      emailValid: true,
      nameValid: true,
      addressValid: true,
      phoneNumberValid: true,
    });
  };
  return (
    <Form onSubmit={SubmitHandler}>
      <InputBlock>
        <Label htmlFor="name">Họ và tên người nhận</Label>
        <Input
          type="text"
          placeholder="Nhập họ và tên người nhận"
          id="name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          autoComplete="off"
        />
        {!formValidity.nameValid && (
          <Error>Thông tin này không thể để trống</Error>
        )}
      </InputBlock>
      <InputBlock>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          placeholder="Nhập email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          autoComplete="off"
        />
        {!formValidity.emailValid && <Error>Vui lòng nhập đúng email</Error>}
      </InputBlock>
      <InputBlock>
        <Label htmlFor="phoneNumber">Số điện thoại</Label>
        <Input
          type="text"
          placeholder="Ví dụ: 0123456xxx (10 ký tự số)"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          autoComplete="off"
        />
        {!formValidity.phoneNumberValid && (
          <Error>Thông tin này không thể để trống</Error>
        )}
      </InputBlock>
      <InputBlock>
        <Label htmlFor="address">Địa chỉ nhận hàng</Label>
        <Input
          type="text"
          placeholder="Nhập địa chỉ nhận hàng"
          id="address"
          name="address"
          autoComplete="off"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        {!formValidity.addressValid && (
          <Error>Thông tin này không thể để trống</Error>
        )}
      </InputBlock>
    </Form>
  );
};

export default UserForm;

const Container = styled.div`
  max-width: 1230px;
  background-color: #fff;
  margin: 70px auto 0;
  padding: 30px;
  text-align: center;
`;
const Form = styled.form`
  padding: 0px 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 991px) {
    width: 100vh;
  }
`;
const Input = styled.input`
  width: 500px;
  height: 30px;
  padding: 4px 17px;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 0.25rem;
`;
const Label = styled.label`
  font-size: 14px;
  color: #333333;
  width: 150px;
  padding: 4px;
  margin-bottom: 5px;
  text-align: left;
`;
const InputBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 8px 0;
  margin-bottom: 20px;
  position: relative;
`;
const Button = styled.button`
  padding: 8px 0;
  margin: 30px auto 8px;
  text-align: center;
  width: 245px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #2ee5ab;
  font-weight: 900;
`;

const Error = styled.p`
  font-weight: 600;
  color: red;
  position: absolute;
  bottom: -35px;
`;
