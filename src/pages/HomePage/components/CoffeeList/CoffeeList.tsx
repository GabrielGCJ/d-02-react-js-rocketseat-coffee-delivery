import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { Coffee } from '../Coffee/Coffee'
import {
  AllCoffees,
  AllCoffeesContainer,
  CoffeeListExternalContainer,
  CoffeeListInternalContainer,
  CoffeeText,
} from './styled'

export const CoffeeList = () => {
  const { coffeeList } = useContext(CoffeeContext)

  return (
    <CoffeeListExternalContainer>
      <CoffeeListInternalContainer>
        <CoffeeText>
          <h2>Nossos cafés</h2>
        </CoffeeText>

        <AllCoffeesContainer>
          <AllCoffees>
            {coffeeList.map((coffee) => {
              return (
                <Coffee
                  key={coffee.id}
                  id={coffee.id}
                  img={coffee.img}
                  name={coffee.name}
                  tag1={coffee.tag1}
                  tag2={coffee.tag2}
                  tag3={coffee.tag3}
                  tag4={coffee.tag4}
                  tag5={coffee.tag5}
                  text={coffee.text}
                  price={coffee.price}
                  quantity={coffee.quantity}
                />
              )
            })}
          </AllCoffees>
        </AllCoffeesContainer>
      </CoffeeListInternalContainer>
    </CoffeeListExternalContainer>
  )
}
