import { useContext, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { Bank, CreditCard, Money } from 'phosphor-react'
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
import { dollarSing } from '../../../../assents'

export const FormOfPayment = () => {
  const { setFormOfPayment } = useContext(CoffeeContext)
  const [isClicked, setIsClicked] = useState({
    credit: false,
    debit: false,
    money: false,
  })

  const handleClickCredit = () => {
    setIsClicked({
      credit: true,
      debit: false,
      money: false,
    })
    setFormOfPayment('Cartão de Credito')
  }

  const handleClickDebit = () => {
    setIsClicked({
      credit: false,
      debit: true,
      money: false,
    })
    setFormOfPayment('Cartão de Debito')
  }

  const handleClickMoney = () => {
    setIsClicked({
      credit: false,
      debit: false,
      money: true,
    })
    setFormOfPayment('Dinheiro')
  }

  return (
    <FormOfPaymentContainer>
      <InstructionsContainer>
        <IconContainer>
          {/* <MapPinLine /> */}
          <img src={dollarSing} alt="" />
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
        <CreditCardButton
          // type="button"
          isClicked={isClicked.credit}
          onClick={handleClickCredit}
        >
          <CreditCard />
          CARTÃO DE CREDITO
        </CreditCardButton>
        <DebitCardButton
          // type="button"
          isClicked={isClicked.debit}
          onClick={handleClickDebit}
        >
          <Bank />
          CARTÃO DE DEBITO
        </DebitCardButton>
        <MoneyButton
          // type="button"
          isClicked={isClicked.money}
          onClick={handleClickMoney}
        >
          <Money />
          DINHEIRO
        </MoneyButton>
      </ButtonsContainer>
    </FormOfPaymentContainer>
  )
}
