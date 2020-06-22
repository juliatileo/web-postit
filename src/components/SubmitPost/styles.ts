import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.secundary};
  margin: 50px auto;
  padding: 50px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  border-radius: 3px;
  background: ${(props) => props.theme.colors.background};
  padding: 5px;
  margin: 10px 0;
`;

export const Button = styled.button`
  border: 1px solid ${(props) => props.theme.colors.secundary};
  padding: 8px 20px;
  margin: 10px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  border-radius: 6px;
`;
