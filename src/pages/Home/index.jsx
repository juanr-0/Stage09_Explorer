import { FiPlus } from 'react-icons/fi'
import { Container, Content, NewNote, Titulo, Wrap_up } from './styles'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'



export function Home() {
  return (
    <Container>

      <Header />

      <Content>
        <Wrap_up>
          <Titulo>
            <h1>Meus Filmes</h1>
          </Titulo>

          <NewNote to="/new">
            <FiPlus />
            Adicionar Filme
          </NewNote>
        </Wrap_up>

        <div className='wrap_notes'>
            <Note data={{
              title: 'Interestellar',
              description:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer ',
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama'},
                { id: '3', name: 'Família'}
              ]
            }}
            />

            <Note data={{
              title: 'Interestellar',
              description:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer ',
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama'},
                { id: '3', name: 'Família'}
              ]
            }}
            />

            <Note data={{
              title: 'Interestellar',
              description:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer ',
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama'},
                { id: '3', name: 'Família'}
              ]
            }}
            />

<Note data={{
              title: 'Interestellar',
              description:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer ',
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama'},
                { id: '3', name: 'Família'}
              ]
            }}
            />
        </div>
      </Content>

    </Container>
  )
}