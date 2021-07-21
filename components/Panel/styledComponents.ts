import  styled  from 'styled-components';
export const PanelContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.panel.background};
  color: ${({ theme }) => theme.colors.panel.text};
  text-align: end;
  padding: .5rem ;
  border-radius: 10px;
`