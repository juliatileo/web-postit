import styled from 'styled-components'

export const Bar = styled.div`
  border: 1px solid ${(props) => props.theme.colors.secundary};
  border-radius: 6px;
  padding: 20px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  width: 30%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    :hover {
      transition: 0.5s;
      color: #d81e5b;
    }
  }
`

export const SubmitBar = styled.div`
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 6px;
  height: 35px;
  padding: 0 10px;
  margin: 10px auto;
  width: 70%;
  input {
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.background};
    border: none;
    color: ${(props) => props.theme.colors.text};
    :focus {
      outline: none;
    }
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const PostContainer = styled.div`
  margin: 30px;
  padding: 30px;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px 1px;
`

export const PostCard = styled.div`
  margin: 5px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.secundary};
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 10px 100px 5px;
  cursor: pointer;
  transition: 0.2s;
  opacity: 0.8;
  :hover {
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
    opacity: 10;
  }
`

export const PostTitle = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

export const ImgContainer = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
`

export const Cookie = styled.img`
  height: 100%;
  margin: 0 10px;
`
