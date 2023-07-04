// import { Coffee } from 'phosphor-react'
import { Coffee } from '../../components/Coffee/Coffee'
import { Intro } from '../../components/Intro/Intro'
import { HomePageContainer } from './styles'

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Intro />
      <Coffee />
    </HomePageContainer>
  )
}
