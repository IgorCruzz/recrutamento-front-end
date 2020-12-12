import React, { useRef } from 'react'
import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FormHandles } from '@unform/core'
import { Container, Content, Title, Message } from './styles'
import { Input } from '../../../components/input'
import * as Yup from 'yup'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Validator } from '../../../shared/ValidationError'
import { userCreateRequest } from '../../../store/ducks/repositories/user/actions'
import {
  ICreateResetPassword,
  ICreateResetPasswordState,
} from '../../../store/ducks/repositories/resetPassword/types'

const CreateResetPasword: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const loading = useSelector(
    (state: ICreateResetPasswordState) => state.createResetPassword.loading
  )
  const dispatch = useDispatch()

  const handleSubmit = async (data: ICreateResetPassword) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('Campo obrigatório'),
      })

      await schema.validate(data, { abortEarly: false })

      dispatch(userCreateRequest(data))
    } catch (err) {
      const Error = Validator(err)

      formRef.current?.setErrors(Error)
    }
  }

  return (
    <Container>
      <Content>
        <Title>
          <h1>Redefinição de senha</h1>
          <Link to="/">
            <AiOutlineArrowLeft /> Voltar para tela de login
          </Link>
        </Title>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="email" type="email" placeholder="Digite seu e-mail" />
          <Message>
            ATENÇÃO: enviaremos um e-mail com um link para você redefinir a sua
            senha.
          </Message>
          <button type="submit">
            {loading ? 'Carregando...' : 'Enviar código de redefinição'}
          </button>
        </Form>
      </Content>
    </Container>
  )
}

export default CreateResetPasword
