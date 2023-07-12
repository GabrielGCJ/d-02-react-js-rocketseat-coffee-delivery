import {
  CartLinkContainer,
  CartLocationContainer,
  HeaderContainer,
  LocationContainer,
  LogoContainer,
} from './styles'
import coffeeDeliveryLogo from '../../assents/coffeeDeliveryLogo.svg'
import buttonCart from '../../assents/buttonCart.svg'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <LogoContainer>
          <img src={coffeeDeliveryLogo} alt=""></img>
        </LogoContainer>
      </NavLink>

      <CartLocationContainer>
        <LocationContainer>
          <MapPin size={26} weight="fill" /* color="#8047F8" */ />
          <p>São José do Vale do Rio Preto, RJ</p>
        </LocationContainer>

        <NavLink to="/checkout">
          <CartLinkContainer>
            <img src={buttonCart} alt=""></img>
          </CartLinkContainer>
        </NavLink>
      </CartLocationContainer>
    </HeaderContainer>
  )
}
