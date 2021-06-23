import styled from 'styled-components'

export const Container = styled.div`
  .main {
    display: grid;
    grid-template-columns: 80px repeat(2, 1fr);
    height: 100vh;

    @media (max-width: 992px) {
      grid-template-columns: 80px 1fr;
      height: 100%;
    }

    @media (max-width: 768px) {
      grid-template-columns: 0px 1fr;
    }
  }
`
