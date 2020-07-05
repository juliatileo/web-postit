import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  background: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  * {
    color: white !important;
    text-decoration: none;
  }
`

export const Logo = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  cursor: pointer;
  opacity: 0.9;
  width: 50px;
  :hover {
    opacity: 1;
  }
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  div {
    font-size: 18px;
    margin: 10px;
    text-decoration: none;
    color: white;
  }
  a {
    text-decoration: none;
  }
`

export const Login = styled.div`
  display: flex;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    border: 1px solid #f5f5f5;
    padding: 10px;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
    margin: 10px;
    :focus {
      outline: none;
    }
    :hover {
      transition: 0.2s;
      background: ${(props) => props.theme.colors.secundary};
      color: #fff;
    }
  }
`
