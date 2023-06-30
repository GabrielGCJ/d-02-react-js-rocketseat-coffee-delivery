import styled from 'styled-components'

export const IntroOutsideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 80%; */
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* background-color: red; */
  /* align-items: center; */
  /* width: 80%; */
  gap: 10rem;
`

export const InformsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;

  width: 36.75rem;

  /* background-color: red; */
`

export const FocusMessageContainer = styled.div`
  display: flex;
  width: 100%;

  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-size-adjust: 0.1rem;
    line-height: 1.2;
    word-spacing: -2px;
  }
`

export const SecondaryMessageContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 3rem;
  width: 100%;
  font-size: 1.3rem;
`

export const ImageContainer = styled.div`
  max-width: 29.75rem;
`

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 1.5rem;
  column-gap: 3rem;

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
`
