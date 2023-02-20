import { RiArrowLeftLine } from "react-icons/ri";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { MdOutlinePhotoCamera } from "react-icons/md";

import {
  Container,
  ProfilePictureContainer,
  HeaderProfile,
  ProfileContent,
  UsersContainer,
  PasswordContainer,
  StyledInput,
  StyledButton,
  CameraButton,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function Profile() {
  return (
    <>
      <HeaderProfile>
        <ButtonText to="/" title="Voltar" icon={RiArrowLeftLine} />
      </HeaderProfile>

      <Container>
        <ProfilePictureContainer>
          <img src="http://github.com/giamaral.png" alt="Foto do usuário" />
          <CameraButton Icon={MdOutlinePhotoCamera} />
        </ProfilePictureContainer>

        <ProfileContent>
          <UsersContainer>
            <StyledInput
              placeholder="Gisele Amaral"
              type="text"
              icon={FiUser}
            />
            <StyledInput
              placeholder="gisele.gfa89@gmail.com"
              type="text"
              icon={FiMail}
            />
          </UsersContainer>

          <PasswordContainer>
            <Input placeholder="Senha atual" type="password" icon={FiLock} />
            <Input placeholder="Nova senha" type="password" icon={FiLock} />
          </PasswordContainer>

          <StyledButton title="Salvar" />
        </ProfileContent>
      </Container>
    </>
  );
}
