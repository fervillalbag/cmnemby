import styled from 'styled-components'

export const Container = styled.div`
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: ${props => props.theme.colors.secondary};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;

  @media (max-width: 768px) {
    width: 0;
    overflow: hidden;
  }

  .navbar {
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-brand {
      background-color: ${props => props.theme.colors.primaryLight};
      display: block;
      width: 100%;
      padding: 1.4rem 0;
      text-align: center;
      font-size: 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props => props.theme.colors.primary};
    }

    &-bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-social {
      background-color: ${props => props.theme.colors.primaryLight};
      color: ${props => props.theme.colors.primary};
      padding: 0.75rem 1rem;
      font-size: 1.6rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      margin-bottom: 1rem;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`
