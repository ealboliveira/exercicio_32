import { ADICIONAR_CONTATO, REMOVER_CONTATO, EDITAR_CONTATO } from '../actions'
import { Contato } from '../types' // Certifique-se de importar o tipo Contato

interface Estado {
  contatos: Contato[]
}

interface AcaoAdicionarContato {
  type: typeof ADICIONAR_CONTATO
  payload: Contato
}

interface AcaoRemoverContato {
  type: typeof REMOVER_CONTATO
  payload: number // Assumindo que payload é o ID do contato a ser removido
}

interface AcaoEditarContato {
  type: typeof EDITAR_CONTATO
  payload: {
    id: number
    contatoAtualizado: Contato
  }
}

type AcaoContatos =
  | AcaoAdicionarContato
  | AcaoRemoverContato
  | AcaoEditarContato

const estadoInicial: Estado = {
  contatos: []
}

const contatosReducer = (
  estado: Estado = estadoInicial,
  action: AcaoContatos
): Estado => {
  switch (action.type) {
    case ADICIONAR_CONTATO:
      return {
        ...estado,
        contatos: [...estado.contatos, action.payload]
      }
    case REMOVER_CONTATO:
      return {
        ...estado,
        contatos: estado.contatos.filter(
          (contato) => contato.id !== action.payload
        )
      }
    case EDITAR_CONTATO:
      return {
        ...estado,
        contatos: estado.contatos.map((contato) =>
          contato.id === action.payload.id
            ? action.payload.contatoAtualizado
            : contato
        )
      }
    default:
      return estado
  }
}

export default contatosReducer
