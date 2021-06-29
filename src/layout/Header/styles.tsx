import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 992px) {
    overflow-y: initial;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 70%);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .header {
    width: 86%;
    margin: 0 auto;
    height: 85%;

    @media (max-width: 992px) {
      height: 100%;
      margin-top: 4rem;
    }

    &__title {
      margin: 0;
      font-size: 2rem;
      color: ${props => props.theme.colors.primary};
      padding-left: 1.5rem;

      span {
        display: block;

        @media (max-width: 768px) {
          display: inline;
        }
      }

      @media (max-width: 768px) {
        font-size: 1.8rem;
      }
    }

    &-media {
      display: grid;
      grid-template-columns: 80px 50px 80px 50px 80px;
      grid-template-rows: repeat(4, 80px);
      justify-content: center;
      padding: 2rem 0;

      @media (max-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
      }

      &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        outline: 10px solid ${props => props.theme.colors.secondary};

        &:nth-child(1) {
          grid-column: 2 / 4;
          grid-row: 2 / 3;
        }

        &:nth-child(2) {
          grid-column: 3 / 5;
          grid-row: 3 / 4;
        }

        &:nth-child(3) {
          grid-column: 1 / 3;
          grid-row: 3 / 5;
        }

        &:nth-child(4) {
          grid-column: 4 / 6;
          grid-row: 1 / 3;
        }
      }
    }

    &-main {
      padding-bottom: 4rem;
      &__description {
        font-size: 1.2rem;
        color: hsl(0deg, 0%, 40%);
        margin-bottom: 1.6rem;
        line-height: 1.4;

        &:first-of-type {
          margin-top: 1rem;
        }

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      &__link {
        display: inline-block;
        margin-top: 1.6rem;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.light};
        text-decoration: none;
        padding: 0.5rem 1rem;
        font-weight: 600;
      }
    }
  }

  .brand {
    display: flex;
    align-items: center;

    &-image {
      width: 80px;
    }
  }
`
