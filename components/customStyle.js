import { StyleSheet } from "react-native";

export const customStyle = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:"center"
    },
    background:{
        height:"100%",
    },
    workspace:{
        height:450,
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    input:{
        backgroundColor:"white",
        height:60,
        width:"80%",
        paddingHorizontal:20,
        paddingVertical:12,
        borderRadius:30,
    },
    rootInput:{
        alignSelf:"stretch",
        alignItems:"center",
    },
    degreeText:{
        position:"absolute",
        alignSelf:"flex-end",
        paddingVertical:10,
        paddingHorizontal:60,
        fontWeight:"bold",
        fontSize:30,
    },
    btnConvert:{
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 42,
        borderRadius: 30,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 7
    }
})