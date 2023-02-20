import { RiArrowLeftLine } from "react-icons/ri";
import { HiOutlineClock } from "react-icons/hi2";

import {
  Container,
  ActionsContainer,
  Info,
  MovieInfo,
  UserInfo,
  TagsContainer,
  Tag,
  Text,
} from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Score } from "../../components/Score";

export function Preview() {
  return (
    <Container>
      <Header />

      <ActionsContainer>
        <ButtonText to="/" title="Voltar" icon={RiArrowLeftLine} />
      </ActionsContainer>

      <Section>
        <Info>
          <MovieInfo>
            <h1>O senhor dos anéis</h1>
            <Score score={1} />
          </MovieInfo>

          <UserInfo>
            <img src="http://github.com/giamaral.png" alt="Foto do usuário" />
            <span>Por Gisele Amaral</span>
            <HiOutlineClock />
            <span>17/02/2023 as 19:10</span>
          </UserInfo>
        </Info>

        <TagsContainer>
          <Tag title="Fantasia" />
          <Tag title="Aventura" />
          <Tag title="Ação" />
        </TagsContainer>

        <Text>
          Em uma terra fantástica e única, um hobbit recebe de presente de seu
          tio um anel mágico e maligno que precisa ser destruído antes que caia
          nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela
          frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para
          o cumprimento desta jornada, ele aos poucos pode contar com outros
          hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove
          seres que formam a Sociedade do Anel.
        </Text>

        <Text>
          Em uma terra fantástica e única, um hobbit recebe de presente de seu
          tio um anel mágico e maligno que precisa ser destruído antes que caia
          nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela
          frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para
          o cumprimento desta jornada, ele aos poucos pode contar com outros
          hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove
          seres que formam a Sociedade do Anel.
        </Text>

        <Text>
          Em uma terra fantástica e única, um hobbit recebe de presente de seu
          tio um anel mágico e maligno que precisa ser destruído antes que caia
          nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela
          frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para
          o cumprimento desta jornada, ele aos poucos pode contar com outros
          hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove
          seres que formam a Sociedade do Anel.
        </Text>

        <Text>
          Em uma terra fantástica e única, um hobbit recebe de presente de seu
          tio um anel mágico e maligno que precisa ser destruído antes que caia
          nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela
          frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para
          o cumprimento desta jornada, ele aos poucos pode contar com outros
          hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove
          seres que formam a Sociedade do Anel.
        </Text>
      </Section>
    </Container>
  );
}
