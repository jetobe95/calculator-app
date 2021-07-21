export interface Theme {
  id: string;
  name: string;
  colors: Colors;
  font: string;
}

export interface Colors {
  body: string;
  text: string;
  panel: Panel;
  keyboard: Keyboard;
  numericKeypad: NumericKeypad;
}

export interface Keyboard {
  background: string;
}

export interface NumericKeypad {
  hover: Panel;
  background: string;
  text: string;
  shadowColor: string;
  deleteKey: Key;
  equalKey: Key;
}

export interface Key {
  shadowColor: string;
  background: string;
  text: string;
  hover: Panel;
}

export interface Panel {
  background: string;
  text: string;
}
