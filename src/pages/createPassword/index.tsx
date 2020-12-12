import React, { useRef } from 'react'
import { Form } from '@unform/web'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FormHandles } from '@unform/core'
import { Container, Content, Title } from './styles'
import { Input } from '../../components/input'
import * as Yup from 'yup'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Validator } from '../../shared/ValidationError'
import { createPasswordRequest } from '../../store/ducks/repositories/createPassword/actions'
import {
  ICreatePassword,
  ICreatePasswordState,
} from '../../store/ducks/repositories/createPassword/types'

const CreatePasword: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const loading = useSelector(
    (state: ICreatePasswordState) => state.createPassword.loading
  )
  const params: { code: string } = useParams()
  const dispatch = useDispatch()

  const handleSubmit = async (data: ICreatePassword) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('Campo obrigratório'),
        password: Yup.string().required('Campo obrigratório'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), 'O campo de senha não bate'])
          .required('Campo obrigratório'),
      })

      await schema.validate(data, { abortEarly: false })

      dispatch(
        createPasswordRequest({
          code: params.code,
          confirmPassword: data.confirmPassword,
          password: data.password,
          email: data.email,
        })
      )
    } catch (err) {
      const Error = Validator(err)

      formRef.current?.setErrors(Error)
    }
  }

  return (
    <Container>
      <Content>
        <Title>
          <h1>Criar senha</h1>
          <Link to="/">
            <AiOutlineArrowLeft /> Voltar para tela de login
          </Link>
        </Title>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="email" type="email" placeholder="Digite seu e-mail" />
          <Input name="password" type="password" placeholder="Insira a senha" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Digite sua senha novamente"
          />

          <button type="submit">
            {loading ? 'Carregando...' : 'Criar senha'}
          </button>
        </Form>
      </Content>
    </Container>
  )
}

export default CreatePasword
