export type Op = "+" | "-" | "/" | "*";

function makeOp(operator: Op, num1: number, num2: number): number {
  switch (operator) {
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "+":
      return num1 + num2;
    default:
      return 0;
  }
}

export type CalculatorAction =
  | { type: "APPEND_NUMBER"; payload: string }
  | { type: "DEL" }
  | { type: "RESET" }
  | { type: "MAKE_CALC" }
  | { type: "OPERATOR"; payload: Op };
export interface CalculatorState {
  tempNumber: string;
  tempNumber2: string;
  op?: Op;
}
export const initialState: CalculatorState = {
  tempNumber: "0",
  tempNumber2: "0",
  op: undefined,
};
export function calculatorReducer(
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState {
  switch (action.type) {
    case "APPEND_NUMBER":
      return {
        ...state,
        tempNumber:
          state.tempNumber === "0"
            ? action.payload
            : state.tempNumber + action.payload,
      };

    case "OPERATOR":
      return {
        ...state,
        tempNumber: "0",
        tempNumber2: state.tempNumber,
        op: action.payload,
      };

    case "MAKE_CALC":
      return {
        ...state,
        op: undefined,
        tempNumber2: "0",
        tempNumber: state.op
          ? makeOp(
              state.op,
              parseFloat(state.tempNumber2),
              parseFloat(state.tempNumber)
            ).toString()
          : "0",
      };
    case "DEL":
      return {
        ...state,
        tempNumber: "0",
      };
    case "RESET":
      return {
        ...state,
        tempNumber: "0",
        op: undefined,
      };
    default:
      return state;
  }
}
