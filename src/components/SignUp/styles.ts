import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  input {
    margin: 10px;
    background: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.secundary};
    padding: 10px;
    outline: none;
    color: ${(props) => props.theme.colors.text};
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled.div`
  height: 70px;
  width: 70px;
  margin: 10px;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  border: 1px solid ${(props) => props.theme.colors.secundary};
  padding: 10px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.secundary};
  cursor: pointer;
  margin: 10px;
  :focus {
    outline: none;
  }
`;
