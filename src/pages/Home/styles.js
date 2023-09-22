import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  background-color: #1C1B1E;
  height:100vh;
  overflow: hidden;
`
export const Wrap_up = styled.div`
  height: 105px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 0 100px;
`
export const Titulo = styled.div`
  grid-area: Titulo;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1C1B1E;;

  > h1 {
    flex: 1;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

export const Content = styled.div`
  padding: 0 64px;
  .wrap_notes {
    overflow-y: auto;
    height: 717px;

    max-width:1121px;
    margin-left:136px;
   
    scrollbar-width: thin; 
    scrollbar-color: ${({ theme }) => theme.COLORS.PINK} ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
  
    &::-webkit-scrollbar {
      width: 10px; 
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK}; 
      border-radius: 5px;
      height: auto;
    }
  
    &::-webkit-scrollbar-thumb:hover {
      background-color: #555; 
    }

  }
`
export const NewNote = styled(Link)`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;
  align-self:center;
  border-radius: 8px;
  height: 48px;
  padding: 32px;
  svg {
    margin-right: 8px;
  }
`