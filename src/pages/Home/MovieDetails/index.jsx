import { Container } from "./styles";

import { Link } from "react-router-dom";

export function MoviesDetails({ title, children }) {
  return (
    <Container>
      <Link to="/preview">
        <h1>{title}</h1>
      </Link>
      {children}
    </Container>
  );
}
