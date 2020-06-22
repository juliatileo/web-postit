import styled from "styled-components";

export const Container = styled.div`
  margin: 30px auto;
  padding: 30px;
  max-width: 80%;
`;

export const OriginalPost = styled.div`
  background: ${(props) => props.theme.colors.background};
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 10px;
  padding: 30px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
