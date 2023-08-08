import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;
  font-size: 1rem;

  padding: 0rem 10rem 0rem;

  width: 100%;

  @media screen and (max-width: 999px) {
    padding: 0% 7.22% 0%;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 460px) {
    padding: 0% 5% 0%;
    font-size: 0.6rem;
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 286px) {
    padding: 0% 2% 0%;
    font-size: 0.5rem;
    img {
      width: 100%;
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  padding-right: 1rem;
`

export const CartLocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`

export const CartLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-900']};

  height: 2.375rem;
  min-width: 1rem;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 8px;

  svg {
    color: ${(props) => props.theme['purple-600']};
  }
`
