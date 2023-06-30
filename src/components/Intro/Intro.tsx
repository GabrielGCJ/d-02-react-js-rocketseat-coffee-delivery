import {
  FocusMessageContainer,
  ImageContainer,
  InfoContainer,
  InformsContainer,
  IntroContainer,
  IntroOutsideContainer,
  SecondaryMessageContainer,
} from './styles'
import imgIntro from '../../assents/imgIntro.svg'
import icon1 from '../../assents/iconsIntro/icon1.svg'
import icon2 from '../../assents/iconsIntro/icon2.svg'
import icon3 from '../../assents/iconsIntro/icon3.svg'
import icon4 from '../../assents/iconsIntro/icon4.svg'
export const Intro = () => {
  return (
    <IntroOutsideContainer>
      <IntroContainer>
        <InformsContainer>
          <FocusMessageContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          </FocusMessageContainer>

          <SecondaryMessageContainer>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </SecondaryMessageContainer>

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
