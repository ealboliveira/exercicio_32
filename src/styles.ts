import styled from 'styled-components'

export const ListaContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

export const ContatoItem = styled.div`
  background-color: #f4f4f4;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;

  p {
    margin: 0;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
  }

  button:hover {
    background-color: #2980b9;
  }
`

export const FormContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`

export const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
