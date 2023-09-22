import styled from 'styled-components'
import starImg from '../../assets/starrating.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;

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

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Content = styled.div`
  max-width: 1113px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  
  > header {

    a {
      display: flex;
      align-items: center;
      gap:8px;
      margin-bottom: 24px;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK}
    }
  }
  
  > button:first-child {
    align-self: end;
  }    

  > h1 {
    font-size: 36px;
    font-weight: 500;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }

  .wrap_title {
    display: flex;
    gap: 20px;
    margin-bottom:24px;

  }

  .wrap_details {
    display: flex;
    gap:8px;
    align-items: center;
    margin-bottom:40px;
  }

  .wrap_tags{
    border-radius: 8px;
    display: inline-flex;
    align-items: flex-start;
    margin-bottom:40px;
  }

  span {
    background: #282124;
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  img {
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
`
export const StarRating = styled.div`
  background: url(${starImg})no-repeat;
  height: 12px;
  width: 100%;
  margin-top: 18px;
  margin-bottom: 15px;
`