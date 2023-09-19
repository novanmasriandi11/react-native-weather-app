import { Text, TextInput, View } from "react-native";
import { customStyle } from "./customStyle";

export function InputField({onChange, unit}) {
    return(
        <View style={customStyle.rootInput}>
            <TextInput maxLength={3} style={customStyle.input} placeholder="Masukkan Temperature" onChangeText={(text) => onChange(text)}>
            </TextInput>
            <Text style={customStyle.degreeText}>{unit}</Text>
        </View>
    )
}