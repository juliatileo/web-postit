import styled from 'styled-components'

export const Container = styled.div`
  margin: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

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
`

export const ImgContainer = styled.div`
  height: 25px;
  font-size: 14px;
  display: flex;
  align-items: center;
`

export const Cookie = styled.img`
  height: 100%;
`

export const CommentView = styled.div`
  margin: 10px;
  padding: 30px 0;
  width: fit-content;
`

export const SubmitComment = styled.div`
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  input {
    width: 500px;
    height: 40px;
    background: ${(props) => props.theme.colors.background};
    border: none;
    color: ${(props) => props.theme.colors.text};
    margin: 0 10px;
  }
  button {
    width: fit-content;
    margin: 10px;
    padding: 5px;
    background: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.secundary};
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }
`

export const Comment = styled.div`
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 20px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
  max-width: 520px;
  word-break: break-all;
  p {
    font-size: 14px;
    margin: 10px;
    padding: 5px 0;
  }
  hr {
    border: 1px solid ${(props) => props.theme.colors.secundary};
    margin-top: 5px;
  }
`

export const CookieButton = styled.div`
  border: 1px solid ${(props) => props.theme.colors.text};
  margin-right: 10px;
  background: ${(props) => props.theme.colors.background};
  cursor: pointer;
  height: 30px;
  padding: 5px;
  display: flex;
  align-items: center;
  opacity: 0.9;
  border-radius: 100%;
  :hover {
    transition: 0.5s;
    opacity: 1;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  ul,
  li {
    list-style: none;
  }
  ul {
    display: flex;
  }
  li {
    margin: 10px;
    cursor: pointer;
    opacity: 0.9;
    :hover {
      opacity: 1;
    }
  }
`
