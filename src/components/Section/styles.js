import styled from 'styled-components'

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    
    padding-bottom: 16px;
    margin-bottom: 24px;

    color: ${({ theme}) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }

`

export const BackgroundTag = styled.div`
  background:#0D0C0F;
  border-radius: 8px;
`
