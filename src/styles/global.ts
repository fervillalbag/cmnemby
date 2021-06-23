import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${props => props.theme.colors.light};
    font-family: ${props => props.theme.font.base};
    font-weight: 300;
  }
`
