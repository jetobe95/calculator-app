import useCalculator from "../../hooks/calculator/useCalculator";
import { PanelContainer, PanelNumber } from "./styledComponents";

export default function Panel() {
  const { state } = useCalculator();
  const { tempNumber } = state;
  return (
    <PanelContainer>
      <PanelNumber>{tempNumber}</PanelNumber>
    </PanelContainer>
  );
}
