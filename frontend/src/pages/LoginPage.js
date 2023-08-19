import React, { useState } from 'react';
import { styled } from 'styled-components';
import { redirect, useSubmit, Form } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const LoginPage = () => {
  const submit = useSubmit();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formValidity, setFormValidity] = useState({
    emailValid: true,
    passwordValid: true,
  });
  const SubmitHandler = (event) => {
    event.preventDefault();
    const enteredEmailIsValid = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const enteredPasswordIsValid = password.length >= 6;
    console.log(enteredPasswordIsValid);
    setFormValidity({
      emailValid: enteredEmailIsValid,
      passwordValid: enteredPasswordIsValid,
    });
    const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;
    if (!formIsValid) {
      return;
    }

    submit(
      { email: email, password: password },
      { method: 'POST', encType: 'application/json' }
    );
    setEmail('');
    setPassword('');
    setFormValidity({ emailValid: true, passwordValid: true });
  };
  return (
    <Container>
      <h1>Đăng nhập</h1>

      <FormBlock onSubmit={SubmitHandler}>
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
          <Label htmlFor="password">Mật khẩu</Label>
          <Input
            type="password"
            placeholder="Nhập mật khẩu"
            id="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {!formValidity.passwordValid && (
            <Error>Vui lòng nhập đúng mật khẩu (kí tự >= 6)</Error>
          )}
        </InputBlock>
        <Button type="submit">Đăng nhập</Button>
      </FormBlock>
    </Container>
  );
};

export async function action({ request }) {
  const data = await request.json();
  console.log(data);
}

const Container = styled.div`
  max-width: 1230px;
  background-color: #fff;
  margin: 70px auto 0;
  padding: 30px;
  text-align: center;
`;

const FormBlock = styled.form`
  max-width: 318px;
  margin: 0 auto;
  padding: 24px 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 991px) {
    width: 100vh;
  }
`;

const Input = styled.input`
  height: 30px;
  padding: 4px 17px;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 0.25rem;
`;
const Label = styled.label`
  padding: 4px;
  margin-bottom: 5px;
  text-align: left;
  font-weight: 600;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
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

export default LoginPage;
