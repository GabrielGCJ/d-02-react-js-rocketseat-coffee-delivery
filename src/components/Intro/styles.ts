import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center ; */
  justify-content: space-around;
`
export const InformsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 36.75rem;
`
export const ImageContainer = styled.div`
  max-width: 29.75rem;
`

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  div {
    display: flex;
    flex-direction: row;
    max-width: 36.75rem;
  }
`
