import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }: { theme: any }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }


  .numericKeypad {
  font-weight: bold;
  font-family: inherit;
  border: none;
  width: 100px;
  height: 64px;
  background: ${({ theme }) => theme.colors.numericKeypad.background};
  box-shadow: inset 0px -4px 0px ${({ theme }) =>
    theme.colors.numericKeypad.shadowColor};
  color:${({ theme }) => theme.colors.numericKeypad.text};
  border-radius: 10px;
  font-weight: 700;
  font-size: 32px;
  cursor: pointer;
  &:hover{
    background: ${({ theme }) => theme.colors.numericKeypad.hover.background};
    color: ${({ theme }) => theme.colors.numericKeypad.hover.text};
  }
  & :active {
    transform: scale(0.96);
  }

  &__reset {
  width: 100%;
  background: ${({ theme }) => theme.colors.numericKeypad.deleteKey.background};
  color: white;
  box-shadow: inset 0px -4px 0px ${({ theme }) => theme.colors.numericKeypad.deleteKey.shadowColor};
  &:hover{
    background: ${({ theme }) => theme.colors.numericKeypad.deleteKey.hover.background};
    color: ${({ theme }) => theme.colors.numericKeypad.deleteKey.hover.text};
  }
}
}

`;
