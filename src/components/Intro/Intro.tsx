import { ImageContainer, InformsContainer, IntroContainer } from './styles'
import imgIntro from '../../assents/imgIntro.svg'
export const Intro = () => {
  return (
    <IntroContainer>
      <InformsContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </InformsContainer>

      <ImageContainer>
        <img src={imgIntro} alt="" />
      </ImageContainer>
    </IntroContainer>
  )
}
