import { CalculatorContext } from "./CalculatorContext";
import { useContext } from "react";

export default function useCalculator() {
  const { dispatch, state } = useContext(CalculatorContext);
  return {
    dispatch,
    state,
  };
}
