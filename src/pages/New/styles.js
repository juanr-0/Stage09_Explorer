import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background:#1C1B1E;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
  

  > main {
    grid-area: content;
    overflow-y: auto;

    margin-top:40px;

    /* Estilizando a barra de rolagem vertical */
  scrollbar-width: thin; /* Largura da barra de rolagem (pode ser 'auto' ou 'thin') */
  scrollbar-color: ${({ theme }) => theme.COLORS.PINK} ${({ theme }) => theme.COLORS.BACKGROUND_900}; 

  &::-webkit-scrollbar {
    width: 10px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK}; 
    border-radius: 5px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; 
  }
  }

  .tags {
    display: flex;
    align-self: center;
    gap: 24px;
    padding:16px;
  }

  .wrap_buttons{
    display: flex;
    gap:40px;
  }

  .wrap_buttons :nth-child(1){
    background: #0D0C0F;
    color: ${({ theme }) => theme.COLORS.PINK}
  }

  .wrap_buttons :nth-child(2){
    background:  ${({ theme }) => theme.COLORS.PINK};
    color: #0D0C0F;
  }
`

export const Form = styled.form`
  max-width: 1113px;
  margin: 38px auto;

  > header {
    margin-bottom: 40px;

    a {
      display: flex;
      align-items: center;
      gap:8px;
      margin-bottom: 24px;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK}
    }
  }
`
export const Wrap_input = styled.div`
  display:flex;
  gap:40px;
  margin-bottom:40px;
`
