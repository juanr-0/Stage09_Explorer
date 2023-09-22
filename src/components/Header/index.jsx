import { Container, Profile, Brand, Search } from './styles'
import { Input } from '../../components/Input'

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile to="/profile">

        <div>
          <strong>Juan Rodrigues</strong>
          <span>Sair</span>
        </div>

        <img
          src="https://github.com/juanr-0.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>
  )
}