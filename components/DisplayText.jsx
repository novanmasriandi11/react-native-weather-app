import { Text, View } from "react-native";

export function DisplayText({temperature, unit}) {
    return( 
        <Text style={{fontSize:50, fontWeight:"bold", color:"white"}}>
            {temperature} {unit}
        </Text> 
    )
}