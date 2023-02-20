import { RiArrowLeftLine } from "react-icons/ri";

import {
  Container,
  ActionsContainer,
  AddMovie,
  Form,
  TagsFieldSet,
  TagsContainer,
  ObsTextArea,
  ScoreInput,
  TitleInput,
  DeleteButton,
  SaveButton,
} from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { AddTag } from "../../components/AddTag";

export function Create() {
  return (
    <Container>
      <Header />

      <ActionsContainer>
        <ButtonText to="/" title="Voltar" icon={RiArrowLeftLine} />
      </ActionsContainer>

      <Section>
        <AddMovie>
          <h1>Novo filme</h1>

          <Form>
            <TitleInput placeholder="Título" type="text" />
            <ScoreInput placeholder="Sua nota (de 0 a 5)" type="text" />
            <ObsTextArea placeholder="Observações" type="text" rows="5" />

            <TagsFieldSet>
              <span>Marcadores</span>

              <TagsContainer>
                <AddTag value="Ação" />
                <AddTag value="Fantasia" />
                <AddTag value="Aventura" />
                <AddTag placeholder="Novo marcador" isNew />
              </TagsContainer>
            </TagsFieldSet>

            <DeleteButton title="Excluir filme" />
            <SaveButton title="Salvar alterações" type="submit" />
          </Form>
        </AddMovie>
      </Section>
    </Container>
  );
}
