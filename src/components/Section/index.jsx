import { Container,BackgroundTag } from './styles'

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      <BackgroundTag>
        {children}
      </BackgroundTag>
    </Container>
  )
}