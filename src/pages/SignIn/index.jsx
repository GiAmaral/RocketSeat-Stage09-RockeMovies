import { FiMail, FiLock } from "react-icons/fi";

import BackgroundImg from "../../assets/img/backgroundImg.png";

import {
  Container,
  SignInSection,
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
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    return navigate("/");
  }

  return (
    <Container>
      <SignInSection>
        <SiteTitle>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assitir.</span>
        </SiteTitle>

        <Title>Faça seu login</Title>

        <Form onSubmit={handleSubmit}>
          <InputsContainer>
            <Input placeholder="E-mail" type="text" icon={FiMail} />
            <Input placeholder="Senha" type="password" icon={FiLock} />
          </InputsContainer>

          <StyledButton title="Entrar" type="submit" />
        </Form>

        <BackLinkContainer>
          <ButtonText to="/sign-up" title="Criar conta" />
        </BackLinkContainer>
      </SignInSection>

      <BackgroundContainer>
        <img
          src={BackgroundImg}
          alt="Imagem de uma sala de cinema, com escada, e várias poltronas vermelhas."
        />
      </BackgroundContainer>
    </Container>
  );
}
