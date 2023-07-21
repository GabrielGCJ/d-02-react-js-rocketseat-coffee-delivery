// Importe as dependências necessárias
import React, { useState } from 'react'
import styled from 'styled-components'

// Defina a interface para as propriedades do componente
interface StyledButtonProps {
  isClicked: boolean
  onClick: () => void
}

// Crie um componente de botão estilizado usando styled-components
const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  background-color: ${(props) => (props.isClicked ? 'lightblue' : 'white')};
  color: ${(props) => (props.isClicked ? 'white' : 'black')};
  border: 2px solid lightblue;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.isClicked ? 'lightblue' : 'lightgray'};
  }
`

// Componente funcional que usa o componente de botão estilizado
export const NewComponent: React.FC = () => {
  // State para controlar o estado clicado do botão
  const [isClicked, setIsClicked] = useState(false)

  // Função para lidar com o clique no botão
  const handleClick = () => {
    setIsClicked((prevState) => !prevState)
  }

  return (
    <StyledButton isClicked={isClicked} onClick={handleClick}>
      {isClicked ? 'Clicado!' : 'Clique em mim'}
    </StyledButton>
  )
}

// export default ClickableButton
