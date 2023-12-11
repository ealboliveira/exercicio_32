import { Contato } from '../types'

export const ADICIONAR_CONTATO = 'ADD_CONTATO'
export const REMOVER_CONTATO = 'REMOVER_CONTATO'
export const EDITAR_CONTATO = 'EDITAR_CONTATO'

export const adicionarContato = (contato: Contato) => ({
  type: ADICIONAR_CONTATO,
  payload: contato
})

export const removerContato = (id: number) => ({
  type: REMOVER_CONTATO,
  payload: id
})

export const editarContato = (id: number, contatoAtualizado: Contato) => ({
  type: EDITAR_CONTATO,
  payload: { id, contatoAtualizado }
})

export type { Contato }
