import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primaryLight};
  height: 100vh;
  padding: 2rem;
  position: relative;

  @media (max-width: 992px) {
    grid-column: 2 / 3;
  }

  .mapouter {
    border-radius: 30px;
    overflow: hidden;

    @media (max-width: 768px) {
      border-radius: 10px;
    }
  }
`
