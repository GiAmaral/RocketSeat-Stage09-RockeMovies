import { FiPlus } from "react-icons/fi";

import { Container, TagsContainer, ActionsContainer } from "./styles";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { MoviesDetails } from "./MovieDetails";
import { Paragraph } from "../../components/Paragraph";
import { Score } from "../../components/Score";
import { Link } from "../../components/Link";

export function Home() {
  return (
    <Container>
      <Header />
      <ActionsContainer>
        <h1>Meus filmes</h1>
        <Link to="/create" title="Adicionar filme" Icon={FiPlus} />
      </ActionsContainer>

      <Section>
        <MoviesDetails title="O senhor dos anéis">
          <Score score={1} />
          <Paragraph>
            Em uma terra fantástica e única, um hobbit recebe de presente de seu
            tio um anel mágico e maligno que precisa ser destruído antes que
            caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo
            pela frente, onde encontra perigo, medo e seres bizarros. Ao seu
            lado para o cumprimento desta jornada, ele aos poucos pode contar
            com outros hobbits, um elfo, um anão, dois humanos e um mago,
            totalizando nove seres que formam a Sociedade do Anel.
          </Paragraph>

          <TagsContainer>
            <Tag title="Fantasia" />
            <Tag title="Aventura" />
            <Tag title="Ação" />
          </TagsContainer>
        </MoviesDetails>

        <MoviesDetails title="O senhor dos anéis">
          <Score score={2} />
          <Paragraph>
            Em uma terra fantástica e única, um hobbit recebe de presente de seu
            tio um anel mágico e maligno que precisa ser destruído antes que
            caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo
            pela frente, onde encontra perigo, medo e seres bizarros. Ao seu
            lado para o cumprimento desta jornada, ele aos poucos pode contar
            com outros hobbits, um elfo, um anão, dois humanos e um mago,
            totalizando nove seres que formam a Sociedade do Anel.
          </Paragraph>

          <TagsContainer>
            <Tag title="Fantasia" />
            <Tag title="Aventura" />
            <Tag title="Ação" />
          </TagsContainer>
        </MoviesDetails>

        <MoviesDetails title="O senhor dos anéis">
          <Score score={3} />
          <Paragraph>
            Em uma terra fantástica e única, um hobbit recebe de presente de seu
            tio um anel mágico e maligno que precisa ser destruído antes que
            caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo
            pela frente, onde encontra perigo, medo e seres bizarros. Ao seu
            lado para o cumprimento desta jornada, ele aos poucos pode contar
            com outros hobbits, um elfo, um anão, dois humanos e um mago,
            totalizando nove seres que formam a Sociedade do Anel.
          </Paragraph>

          <TagsContainer>
            <Tag title="Fantasia" />
            <Tag title="Aventura" />
            <Tag title="Ação" />
          </TagsContainer>
        </MoviesDetails>

        <MoviesDetails title="O senhor dos anéis">
          <Score score={4} />
          <Paragraph>
            Em uma terra fantástica e única, um hobbit recebe de presente de seu
            tio um anel mágico e maligno que precisa ser destruído antes que
            caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo
            pela frente, onde encontra perigo, medo e seres bizarros. Ao seu
            lado para o cumprimento desta jornada, ele aos poucos pode contar
            com outros hobbits, um elfo, um anão, dois humanos e um mago,
            totalizando nove seres que formam a Sociedade do Anel.
          </Paragraph>

          <TagsContainer>
            <Tag title="Fantasia" />
            <Tag title="Aventura" />
            <Tag title="Ação" />
          </TagsContainer>
        </MoviesDetails>
        <MoviesDetails title="O senhor dos anéis">
          <Score score={5} />
          <Paragraph>
            Em uma terra fantástica e única, um hobbit recebe de presente de seu
            tio um anel mágico e maligno que precisa ser destruído antes que
            caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo
            pela frente, onde encontra perigo, medo e seres bizarros. Ao seu
            lado para o cumprimento desta jornada, ele aos poucos pode contar
            com outros hobbits, um elfo, um anão, dois humanos e um mago,
            totalizando nove seres que formam a Sociedade do Anel.
          </Paragraph>

          <TagsContainer>
            <Tag title="Fantasia" />
            <Tag title="Aventura" />
            <Tag title="Ação" />
          </TagsContainer>
        </MoviesDetails>

        <MoviesDetails title="O senhor dos anéis">
          <Score score={5} />
          <Paragraph>
            Em uma terra fantástica e única, um hobbit recebe de presente de seu
            tio um anel mágico e maligno que precisa ser destruído antes que
            caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo
            pela frente, onde encontra perigo, medo e seres bizarros. Ao seu
            lado para o cumprimento desta jornada, ele aos poucos pode contar
            com outros hobbits, um elfo, um anão, dois humanos e um mago,
            totalizando nove seres que formam a Sociedade do Anel.
          </Paragraph>

          <TagsContainer>
            <Tag title="Fantasia" />
            <Tag title="Aventura" />
            <Tag title="Ação" />
          </TagsContainer>
        </MoviesDetails>
      </Section>
    </Container>
  );
}
