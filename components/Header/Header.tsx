import { HeaderContainer, ThemeTitle,CalcTitle } from "./styledComponents";
import ThemeSelector from "./ThemeSelector";

export default function Header() {
  return (
    <HeaderContainer>
      <CalcTitle>calc</CalcTitle>
        <ThemeSelector/>
    </HeaderContainer>
  );
}
