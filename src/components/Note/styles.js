import styled from 'styled-components'
import starImg from '../../assets/starrating.png'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_NOTE};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

  > p {
    color: var(--Gray, #999591);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: 53px;
    
    text-align: justify;

    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 15px;
  }
`

export const StarRating = styled.div`
  background: url(${starImg})no-repeat;
  height: 12px;
  margin-top: 8px;
  margin-bottom: 15px;
`