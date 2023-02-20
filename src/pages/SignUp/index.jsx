import { RiArrowLeftLine } from "react-icons/ri";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import BackgroundImg from "../../assets/img/backgroundImg.png";

import {
  Container,
  SignUpSection,
  SiteTitle,
  Title,
  Form,
  InputsContainer,
  BackLinkContainer,
  StyledButton,
  BackgroundContainer,
} from "./styles";

import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { redirect, useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    return navigate("/");
  }

  return (
    <Container>
      <SignUpSection>
        <SiteTitle>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assitir.</span>
        </SiteTitle>

        <Title>Crie sua conta</Title>

        <Form onSubmit={handleSubmit}>
          <InputsContainer>
            <Input placeholder="Nome" type="text" icon={FiUser} />
            <Input placeholder="E-mail" type="text" icon={FiMail} />
            <Input placeholder="Senha" type="password" icon={FiLock} />
          </InputsContainer>

          <StyledButton title="Cadastrar" type="submit" />
        </Form>

        <BackLinkContainer>
          <ButtonText
            to="/sign-in"
            icon={RiArrowLeftLine}
            title="Voltar para o login"
          />
        </BackLinkContainer>
      </SignUpSection>

      <BackgroundContainer>
        <img
          src={BackgroundImg}
          alt="Imagem de uma sala de cinema, com escada, e várias poltronas vermelhas."
        />
      </BackgroundContainer>
    </Container>
  );
}
