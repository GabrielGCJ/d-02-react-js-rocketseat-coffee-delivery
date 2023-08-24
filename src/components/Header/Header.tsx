import { NavLink } from 'react-router-dom'
import { Location } from '../Location/Location'
import { coffeeDeliveryLogo, buttonCart } from '../../assents'
import { MapPin } from 'phosphor-react'
import {
  CartLinkContainer,
  CartLocationContainer,
  HeaderContainer,
  ItensInCart,
  LocationContainer,
  LogoContainer,
} from './styles'
import { useItensInCart } from '../../hooks/useItemsInCart'

export const Header = () => {
  const numberCoffes = useItensInCart()

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
          {/* <p>São José do Vale do Rio Preto, RJ</p> */}
          <Location />
        </LocationContainer>

        <NavLink to="/checkout">
          <CartLinkContainer>
            {numberCoffes > 0 ? (
              <ItensInCart>
                <p>{numberCoffes}</p>
              </ItensInCart>
            ) : (
              ''
            )}
            <img src={buttonCart} alt=""></img>
          </CartLinkContainer>
        </NavLink>
      </CartLocationContainer>
    </HeaderContainer>
  )
}
