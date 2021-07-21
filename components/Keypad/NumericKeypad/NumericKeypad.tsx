import { Key ,DeleteKey, Keypad} from "./styledComponents";

export default function NumericKeypad() {
    return (
        <Keypad>
            <Key>1</Key>
            <Key>2</Key>
            <Key>3</Key>
            <DeleteKey>DEL</DeleteKey>
        </Keypad>
    )
}
