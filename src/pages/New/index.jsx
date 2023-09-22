import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Container, Form, Wrap_input } from './styles'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/"><FiArrowLeft />voltar</Link>
            <h1>Novo Filme</h1>
          </header>

          <Wrap_input>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota de 0 a 5)" />
          </Wrap_input>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="Drama" />
              <NoteItem isNew placeholder="Novo Marcador" />
            </div>
          </Section>

          <div className="wrap_buttons">
            <Button title="Excluir Filme" />
            <Button title="Salvar" />
          </div>
        </Form>
      </main>
    </Container>
  )
}