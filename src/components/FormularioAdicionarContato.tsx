// FormularioAdicionarContato.tsx
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Contato, adicionarContato } from '../actions'
import * as S from '../styles'

interface FormularioAdicionarContatoProps {
  adicionarContato: (contato: Contato) => void
}

const FormularioAdicionarContato: React.FC<FormularioAdicionarContatoProps> = ({
  adicionarContato
}) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const novoContato = { id: Date.now(), nome, email, telefone }
    adicionarContato(novoContato)
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <S.FormContainer>
      <form onSubmit={handleSubmit}>
        <S.FormLabel>
          Nome:
          <S.FormInput
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </S.FormLabel>
        <S.FormLabel>
          E-mail:
          <S.FormInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </S.FormLabel>
        <S.FormLabel>
          Telefone:
          <S.FormInput
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </S.FormLabel>
        <S.FormButton type="submit">Adicionar Contato</S.FormButton>
      </form>
    </S.FormContainer>
  )
}

export default connect(null, { adicionarContato })(FormularioAdicionarContato)
