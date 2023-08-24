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
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export const Header = () => {
  const { activeCoffeeInfo } = useContext(CoffeeContext)

  const numberCoffes = activeCoffeeInfo.length

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
            {/* <ItensInCart>
              <p>2</p>
            </ItensInCart> */}
            <img src={buttonCart} alt=""></img>
          </CartLinkContainer>
        </NavLink>
      </CartLocationContainer>
    </HeaderContainer>
  )
}
