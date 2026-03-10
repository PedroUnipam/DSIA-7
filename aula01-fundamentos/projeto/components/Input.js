import { TextInput } from "react-native";

export default function Input(props) {
    const [value, setValue] = useState(0);

    const handleTextChange = (text) => {
        setValue(text);
    }
    return(
        <TextInput
        onChangeText={handleTextChange}
        />
    )
}