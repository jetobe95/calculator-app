import { mediaQueries } from './../../utils/breakpoint';
import  styled  from 'styled-components';
export const PanelContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.panel.background};
  color: ${({ theme }) => theme.colors.panel.text};
  text-align: end;
  padding: 0.813em 0.75em ;
  border-radius: 10px;
  font-size: 32px;
  ${mediaQueries('md')`
    font-size: 48px;
  `}
`

export const PanelNumber = styled.h1`
  font-size: 1em;
  margin:0;
`