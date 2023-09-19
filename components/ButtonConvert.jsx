import { Pressable, Text, TouchableOpacity } from "react-native";
import { customStyle } from "./customStyle";

export function ButtonConvert(props) {
    const { onPress, title = "Convert to" } = props
    return(
        <TouchableOpacity style={customStyle.btnConvert} onPress={onPress}>
            <Text style={{fontWeight:"bold", color:"white", fontSize:20}}>{title}</Text>
        </TouchableOpacity>
    )
}