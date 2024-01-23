import { Text, TouchableOpacity } from "react-native";
import { Column } from "./LayoutComponent";


function TextButton({buttonStyle = {}, textStyle = {}, label, callBack}){

    return(
        <TouchableOpacity 
            onPress={callBack}
            style = {buttonStyle}>
            <Text style = {textStyle}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TextButton