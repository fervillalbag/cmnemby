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
    }

    &-media {
      position: relative;
      height: 450px;

      @media (max-width: 1460px) {
        transform: translateX(-4rem);
      }

      @media (max-width: 1290px) {
        transform: translateX(-6rem);
      }

      @media (max-width: 1090px) {
        transform: translateX(-7rem);
      }

      @media (max-width: 768px) {
        transform: scale(0.8) translateX(-9.5rem);
      }

      &__image {
        width: 100%;
        position: absolute;
        outline: 1rem solid ${props => props.theme.colors.secondary};

        &:nth-child(1) {
          width: 150px;
          left: 23.2rem;
          bottom: 14.8rem;
          transform: translateX(-100%);
        }

        &:nth-child(2) {
          width: 120px;
          bottom: 2.5rem;
          left: 8.4rem;
        }

        &:nth-child(3) {
          width: 150px;
          left: 16.9rem;
          bottom: 7.5rem;
        }

        &:nth-child(4) {
          width: 120px;
          left: 24rem;
          bottom: 15rem;
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
`
