import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    :focus{
        outline: none;
    }
}

a{
    text-decoration: none;
    color:${(props) => props.theme.colors.text} ;
}

body{
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;
}
`;
