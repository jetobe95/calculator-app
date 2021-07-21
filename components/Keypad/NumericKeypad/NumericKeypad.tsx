import { Key, DeleteKey, Keypad, ResetKey,EqualKey } from "./styledComponents";

export default function NumericKeypad() {
  return (
    <Keypad>
      <Key>7</Key>
      <Key>8</Key>
      <Key>9</Key>
      <DeleteKey>DEL</DeleteKey>
      <Key>4</Key>
      <Key>5</Key>
      <Key>6</Key>
      <Key>+</Key>
      <Key>1</Key>
      <Key>2</Key>
      <Key>3</Key>
      <Key>{"-"}</Key>

      <Key>{"."}</Key>
      <Key>{"0"}</Key>
      <Key>{"/"}</Key>
      <Key>{"x"}</Key>
      <ResetKey>RESET</ResetKey>
      <EqualKey>{'='}</EqualKey>

    </Keypad>
  );
}
