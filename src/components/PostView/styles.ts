import styled from "styled-components";

export const Container = styled.div`
  margin: 30px auto;
  padding: 30px;
  max-width: 80%;
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 6px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-top: 10px;
`;

export const Cookie = styled.img`
  height: 100%;
`;

export const CookieButton = styled.div`
  border: 1px solid ${(props) => props.theme.colors.text};
  margin-right: 10px;
  background: ${(props) => props.theme.colors.background};
  cursor: pointer;
  height: 40px;
  border-radius: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  opacity: 0.9;
  :hover {
    transition: 0.5s;
    opacity: 1;
  }
`;

export const Content = styled.div`
  margin: 30px;
  padding-top: 30px;
  text-align: justify;
  word-break: break-all;
  font-size: 16px;
  border-top: 1px solid ${(props) => props.theme.colors.secundary};
  text-indent: 4em;
`;

export const Comments = styled.div`
  margin: 10px auto;
  border: 1px solid ${(props) => props.theme.colors.secundary};
  border-radius: 6px;
  padding: 10px;
  font-size: 20px;
  width: 50%;
  text-align: center;
  cursor: pointer;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  li {
    cursor: pointer;
    font-size: 16px;
    list-style: none;
    margin: 10px;
    opacity: 0.9;
    :hover {
      transition: 0.5s;
      opacity: 1;
    }
  }
`;
