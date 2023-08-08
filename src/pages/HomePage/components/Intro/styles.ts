import styled from 'styled-components'

export const IntroOutsideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 10rem;

  @media screen and (max-width: 999px) {
    padding: 0% 7.22% 0%;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 460px) {
    padding: 0% 5% 0%;
    font-size: 0.6rem;
  }
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const InformsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: justify;

  width: 36.75rem;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: start;
    font-family: 'Baloo 2';
    font-size: 3vw;
    line-height: 1.2;

    @media screen and (max-width: 650px) {
      font-size: 4vw;
    }
  }

  p {
    padding: 1rem 0 3rem 0;
    font-size: 1.5vw;

    @media screen and (max-width: 650px) {
      font-size: 2vw;
    }

    @media screen and (max-width: 460px) {
      padding-bottom: 2.3rem;
    }
  }
`

export const ImageContainer = styled.div`
  img {
    width: 100%;
    padding-left: 1.5rem;
  }
`

export const InfoContainer = styled.div`
  display: grid;
  justify-content: start;
  align-items: start;
  grid-template-columns: auto auto;
  row-gap: 1.5rem;
  column-gap: 3rem;
  font-size: 100%;

  div {
    display: flex;
    flex-direction: row;
    max-width: 36.75rem;
    text-align: center;
    align-items: center;

    p {
      padding-left: 0.5rem;
    }
  }

  @media screen and (max-width: 780px) {
    display: grid;
    grid-template-columns: auto;
  }
`
