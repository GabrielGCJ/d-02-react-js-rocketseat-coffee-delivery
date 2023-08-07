import { CoffeeList } from './components/CoffeeList/CoffeeList'
import { Intro } from './components/Intro/Intro'
import { HomePageContainer } from './styles'

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Intro />
      <CoffeeList />
    </HomePageContainer>
  )
}
