import styled from "styled-components";
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const SizedBox = styled.div`
  width: 10px;
`;

export const CalcTitle = styled.h3`
  font-size: 32px;
  margin-bottom: 0;
`;
export const _ThemeSelector = styled.div`
  display: flex;
`;
export const ThemeTitle = styled.h3`
  display: inline-flex;
  font-size: 12px;
`;
export const ThemeToggle = styled.div`
  display: inline-flex;
  align-items: center;
  height: 2rem;
  width: ${4 * 1.16}rem;
  cursor: pointer;
  padding: 9px;
  background-color: ${({ theme }) => theme.colors.keyboard.background};
  border-radius: 17px;
`;

export const ThemeToggleIndicator = styled.div<{
  counter: string;
  enabled?: boolean;
}>`
  position: relative;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.16rem;

  background-color: ${({ theme, enabled }) =>
    enabled ? theme.colors.numericKeypad.equalKey.background : "transparent"};
  &::after {
    content: "${(props) => props.counter}";
    font-size: 12px;
    color: ${({ theme }) => theme.colors.body.text};
    position: absolute;
    top: -1.5rem;
    right: 0.4rem;
  }
`;
