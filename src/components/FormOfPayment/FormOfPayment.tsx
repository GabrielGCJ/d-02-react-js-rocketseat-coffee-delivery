import {
  FormOfPaymentContainer,
  InstructionsContainer,
  IconContainer,
  TextInformations,
  ButtonsContainer,
  CreditCardButton,
  DebitCardButton,
  MoneyButton,
  Text1,
  Text2,
} from './styles'

import { Bank, CreditCard, Money } from 'phosphor-react'
import cifrao from '../../assents/dollar-sign.svg'

export const FormOfPayment = () => {
  return (
    <FormOfPaymentContainer>
      <InstructionsContainer>
        <IconContainer>
          {/* <MapPinLine /> */}
          <img src={cifrao} alt="" />
        </IconContainer>
        <TextInformations>
          <Text1>
            <p>Pagamento</p>
          </Text1>
          <Text2>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </Text2>
        </TextInformations>
      </InstructionsContainer>
      <ButtonsContainer>
        <CreditCardButton type="button">
          <CreditCard />
          CARTÃO DE CREDITO
        </CreditCardButton>
        <DebitCardButton type="button">
          <Bank />
          CARTÃO DE DEBITO
        </DebitCardButton>
        <MoneyButton type="button">
          <Money />
          DINHEIRO
        </MoneyButton>
      </ButtonsContainer>
    </FormOfPaymentContainer>
  )
}
