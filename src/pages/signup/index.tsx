import React, { useRef } from 'react'
import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FormHandles } from '@unform/core'
import { Container, Content, Title, Message } from './styles'
import { Input } from '../../components/input'
import * as Yup from 'yup'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Validator } from '../../shared/ValidationError'
import { userCreateRequest } from '../../store/ducks/repositories/user/actions'
import {
  IUserCreate,
  IUserState,
} from '../../store/ducks/repositories/user/types'
import { Helmet } from 'react-helmet'
import Button from '@material-ui/core/Button'

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
    <>
      <Helmet>
        <title>Cadastro</title>
      </Helmet>
      <Container>
        <Content>
          <Title>
            <h1>Cadastro</h1>
            <Link to="/">
              <AiOutlineArrowLeft /> Voltar para tela de login
            </Link>
          </Title>

          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input
              name="email"
              type="email"
              placeholder="Digite seu melhor e-mail"
            />
            <Message>
              ATENÇÃO: enviaremos um e-mail com um link para você criar a sua
              senha.
            </Message>
            <Button variant="outlined" type="submit" color="primary">
              {loading ? 'Carregando...' : 'Cadastrar'}
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  )
}

export default SignUp
