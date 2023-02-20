import { Container } from "./styles";

export function Button({ title, Icon, className, type = "button" }) {
  return (
    <Container type={type} className={className}>
      {Icon ? <Icon /> : null}
      {title ? <span>{title}</span> : null}
    </Container>
  );
}
