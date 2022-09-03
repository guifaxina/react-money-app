import { useState } from 'react'
import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal'

type HeaderProps = {
  onOpenNewTransactionModal: () => void
}

export function Header(props: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type='button' onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>

      </Content>
    </Container>
  )
}