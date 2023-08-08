import { icon1, icon2, icon3, icon4, imgIntro } from '../../../../assents'
import {
  MessageContainer,
  ImageContainer,
  InfoContainer,
  InformsContainer,
  IntroContainer,
  IntroOutsideContainer,
} from './styles'

export const Intro = () => {
  return (
    <IntroOutsideContainer>
      <IntroContainer>
        <InformsContainer>
          <MessageContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </MessageContainer>

          <InfoContainer>
            <div>
              <img src={icon1} alt="" />
              <p>Compra simples e segura</p>
            </div>
            <div>
              <img src={icon2} alt="" />
              <p>Embalagem mantem o café intacto</p>
            </div>
            <div>
              <img src={icon3} alt="" />
              <p>Entrega rapida e rastreada</p>
            </div>
            <div>
              <img src={icon4} alt="" />
              <p>O cafe chega fresquinho ate você</p>
            </div>
          </InfoContainer>
        </InformsContainer>

        <ImageContainer>
          <img src={imgIntro} alt="" />
        </ImageContainer>
      </IntroContainer>
    </IntroOutsideContainer>
  )
}
