import { Container, InnerContainer, Profile, Logo, ButtonText } from "./styles";

import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <InnerContainer>
        <Link to="/">
          <Logo>RocketMovies</Logo>
        </Link>

        <Input placeholder="Pesquisar pelo título" />

        <Profile>
          <div>
            <Link to="/profile">
              <strong>Gisele Amaral</strong>
            </Link>

            <ButtonText to="/sign-in" title="Sair" />
          </div>

          <Link to="/profile">
            <img src="http://github.com/giamaral.png" alt="Foto do usuário" />
          </Link>
        </Profile>
      </InnerContainer>
    </Container>
  );
}
