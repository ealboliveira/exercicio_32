import React from 'react'
import { connect } from 'react-redux'
import { removerContato, editarContato } from '../actions'
import { Contato } from '../types'
import * as S from '../styles'

interface ListaContatosProps {
  contatos: Contato[]
  removerContato: (id: number) => void
  editarContato: (id: number, contatoAtualizado: Contato) => void
}

const ListaContatos: React.FC<ListaContatosProps> = ({
  contatos,
  removerContato,
  editarContato
}) => {
  return (
    <S.ListaContainer>
      {contatos.map((contato) => (
        <S.ContatoItem key={contato.id}>
          <p>{`Nome: ${contato.nome}`}</p>
          <p>{`E-mail: ${contato.email}`}</p>
          <p>{`Telefone: ${contato.telefone}`}</p>
          <S.ButtonContainer>
            <button
              onClick={() => {
                const novoContato = { ...contato }
                novoContato.nome = prompt('Novo nome:', novoContato.nome) || ''
                novoContato.email =
                  prompt('Novo e-mail:', novoContato.email) || ''
                novoContato.telefone =
                  prompt('Novo telefone:', novoContato.telefone) || ''

                editarContato(contato.id, novoContato)
              }}
            >
              Editar
            </button>
            <button onClick={() => removerContato(contato.id)}>Remover</button>
          </S.ButtonContainer>
        </S.ContatoItem>
      ))}
    </S.ListaContainer>
  )
}

const mapStateToProps = ({
  contatos
}: {
  contatos: { contatos: Contato[] }
}) => ({
  contatos: contatos.contatos // Ajuste aqui
})

export default connect(mapStateToProps, { removerContato, editarContato })(
  ListaContatos
)
