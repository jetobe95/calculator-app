import { createContext, Dispatch, FC, useReducer } from "react";
import {
  CalculatorAction,
  calculatorReducer,
  CalculatorState,
  initialState,
} from "./calculator";

export const CalculatorContext = createContext<{
  state: CalculatorState;
  dispatch: Dispatch<CalculatorAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const CalculatorProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};
