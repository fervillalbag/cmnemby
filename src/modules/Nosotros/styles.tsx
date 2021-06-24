import styled from 'styled-components'

export const Container = styled.div`
  .about {
    &-left {
      padding-top: 3rem;
      width: 85%;
      margin: 0 auto;
      overflow-y: auto;
      padding-bottom: 3rem;

      @media (max-width: 992px) {
        padding-bottom: 0;
      }

      &::-webkit-scrollbar {
        width: 0;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      &::-webkit-scrollbar-thumb {
        background: #888;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }

      &__title {
        margin-bottom: 2rem;
        font-size: 2rem;
        color: ${props => props.theme.colors.primary};

        &:last-of-type {
          margin-top: 2.5rem;
        }
      }

      &__description {
        font-size: 1.2rem;
        line-height: 1.5;
        margin-bottom: 2rem;

        @media (max-width: 992px) {
          font-size: 1rem;
        }
      }
    }

    &-right {
      padding: 2rem;

      @media (max-width: 992px) {
        grid-column: 2 / 3;
      }

      &__image {
        width: 100%;
        height: calc(100vh - 4rem);
        border-radius: 10px;
        vertical-align: top;

        @media (max-width: 992px) {
          height: 100%;
        }
      }
    }
  }
`
