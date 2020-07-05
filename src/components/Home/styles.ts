import styled from 'styled-components'

export const Container = styled.div`
  height: 80vh;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    margin: 10px;
  }
  p {
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
  }
`
