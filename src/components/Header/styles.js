import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  gap:64px;
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color:#1C1B1E;

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`
export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
export const Search = styled.div`
  grid-area: search;
  padding: 24px 24px 0;
  width: 100%;
   input {
    border-radius: 10px;
    background: #262529;
  }  
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left:10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      display: flex;
      justify-content: flex-end;
    }

    strong {
      white-space: nowrap;
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      display: flex;
      justify-content: flex-end;
    }
  }
`

