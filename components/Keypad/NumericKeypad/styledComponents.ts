import styled from "styled-components";

export const Keypad = styled.main`
  background-color: ${({ theme }) => theme.colors.keyboard.background};
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 60px);
  grid-gap: 20px;
  border-radius: 10px;
  font-size: 28px;
  /* Agregar mediaquery para cambiar el fontsize */
`;

export const Key = styled.button`
  font-family: inherit;
  border: none;
  width: 100%;
  height: 64px;
  background: ${({ theme }) => theme.colors.numericKeypad.background};
  box-shadow: inset 0px -4px 0px ${({ theme }) => theme.colors.numericKeypad.shadowColor};
  color: ${({ theme }) => theme.colors.numericKeypad.text};
  border-radius: 10px;
  font-weight: 700;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.numericKeypad.hover.background};
    color: ${({ theme }) => theme.colors.numericKeypad.hover.text};
  }
  &:active {
    transform: scale(0.96);
  }
  padding: 0.357em 0.464em 0.5em 0.5em;
`;

export const DeleteKey = styled(Key)`
  width: 100%;
  background: ${({ theme }) => theme.colors.numericKeypad.deleteKey.background};
  color: ${({ theme }) => theme.colors.numericKeypad.deleteKey.text};
  font-size: 0.64em;
  box-shadow: inset 0px -4px 0px ${({ theme }) => theme.colors.numericKeypad.deleteKey.shadowColor};
  &:hover {
    background: ${({ theme }) =>
      theme.colors.numericKeypad.deleteKey.hover.background};
    color: ${({ theme }) => theme.colors.numericKeypad.deleteKey.hover.text};
  }
`;

export const ResetKey = styled(DeleteKey)`
  grid-column: 2 span;
`;

export const EqualKey = styled(Key)`
  grid-column: 2 span;
  background: ${({ theme }) => theme.colors.numericKeypad.equalKey.background};
  box-shadow: inset 0px -4px 0px ${({ theme }) => theme.colors.numericKeypad.equalKey.shadowColor};
  color: ${({ theme }) => theme.colors.numericKeypad.equalKey.text};

  &:hover {
    background: ${({ theme }) =>
      theme.colors.numericKeypad.equalKey.hover.background};
    color: ${({ theme }) => theme.colors.numericKeypad.equalKey.hover.text};
  }
`;
