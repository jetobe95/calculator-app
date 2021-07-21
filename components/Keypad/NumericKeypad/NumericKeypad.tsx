import { Op } from "../../../hooks/calculator/calculator";
import useCalculator from "../../../hooks/calculator/useCalculator";
import { Key, DeleteKey, Keypad, ResetKey, EqualKey } from "./styledComponents";

export default function NumericKeypad() {
  const { dispatch } = useCalculator();

  const appendNumber = (number: string) =>
    dispatch({ type: "APPEND_NUMBER", payload: number });
  const operator = (op: Op) => dispatch({ type: "OPERATOR", payload: op });

  return (
    <Keypad>
      <Key onClick={() => appendNumber("7")}>7</Key>
      <Key onClick={() => appendNumber("8")}>8</Key>
      <Key onClick={() => appendNumber("9")}>9</Key>
      <DeleteKey onClick={() => dispatch({ type: "DEL" })}>DEL</DeleteKey>
      <Key onClick={() => appendNumber("4")}>4</Key>
      <Key onClick={() => appendNumber("5")}>5</Key>
      <Key onClick={() => appendNumber("6")}>6</Key>
      <Key onClick={() => operator("+")}>+</Key>
      <Key onClick={() => appendNumber("1")}>1</Key>
      <Key onClick={() => appendNumber("2")}>2</Key>
      <Key onClick={() => appendNumber("3")}>3</Key>
      <Key onClick={() => operator("-")}>{"-"}</Key>

      <Key>{"."}</Key>
      <Key onClick={() => appendNumber("0")}>{"0"}</Key>
      <Key onClick={() => operator("/")}>{"/"}</Key>
      <Key onClick={() => operator("*")}>{"x"}</Key>
      <ResetKey onClick={() => dispatch({ type: "RESET" })}>RESET</ResetKey>
      <EqualKey onClick={() => dispatch({ type: "MAKE_CALC" })}>{"="}</EqualKey>
    </Keypad>
  );
}
