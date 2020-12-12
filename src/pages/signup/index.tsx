import React, { useRef } from 'react'
import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FormHandles } from '@unform/core'
import { Container, Content, Title } from './styles'
import { Input } from '../../components/input'
import * as Yup from 'yup'
import { Validator } from '../../utils/ValidationError'
import { userCreateRequest } from '../../store/ducks/repositories/user/actions'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import {
  IUserCreate,
  IUserState,
} from '../../store/ducks/repositories/user/types'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const loading = useSelector((state: IUserState) => state.user.loading)
  const dispatch = useDispatch()

  const handleSubmit = async (data: IUserCreate) => {
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
          <h1>Cadastro</h1>
          <Link to="/">
            <AiOutlineArrowLeft /> Voltar para tela de login
          </Link>
        </Title>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="email" type="email" placeholder="E-mail" />
          <button type="submit">
            {loading ? 'Carregando...' : 'Cadastrar'}
          </button>
        </Form>
      </Content>
    </Container>
  )
}

export default SignUp
