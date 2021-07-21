import styled from "styled-components";

export const Keypad = styled.main`
  background-color: ${({ theme }) => theme.colors.keyboard.background};
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-gap: 20px;
  border-radius: 10px;
  padding: 1rem;
`;

export const Key = styled.button`
  font-weight: bold;
  font-family: inherit;
  border: none;
  width: 100px;
  height: 64px;
  background: ${({ theme }) => theme.colors.numericKeypad.background};
  box-shadow: inset 0px -4px 0px ${({ theme }) => theme.colors.numericKeypad.shadowColor};
  color: ${({ theme }) => theme.colors.numericKeypad.text};
  border-radius: 10px;
  font-weight: 700;
  font-size: 32px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.numericKeypad.hover.background};
    color: ${({ theme }) => theme.colors.numericKeypad.hover.text};
  }
  &:active {
    transform: scale(0.96);
  }
`;

export const DeleteKey = styled(Key)`
  width: 100%;
  background: ${({ theme }) => theme.colors.numericKeypad.deleteKey.background};
  color: white;
  box-shadow: inset 0px -4px 0px ${({ theme }) => theme.colors.numericKeypad.deleteKey.shadowColor};
  &:hover {
    background: ${({ theme }) =>
      theme.colors.numericKeypad.deleteKey.hover.background};
    color: ${({ theme }) => theme.colors.numericKeypad.deleteKey.hover.text};
  }
`;
