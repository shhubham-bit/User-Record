import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Row } from "./LayoutComponent";
import { useState } from "react";


function InputFieldWithIcon({
    id,
    value, 
    onTextChange,  
    innerRef,
    style,
    focusStyle,
    hint,
    onIconClick,
    readOnly = false
}){

    const [focusState, setFocusState] = useState(false)

    const textListener = (text) => {
        console.log("bjdxbajk", text)
        onTextChange(id, text)
    }

    console.log("recerived", value)

    return(
        <Row rowStyle={{
            flex: 0, 
            justifyContent: 'center',
            itemAlign: 'center',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 15,
            padding: 16,
            margin: 16
            }}>
            <TextInput 
                style = {{flex: 1}}
                value={value}
                onChangeText={(e) => textListener(e)}
                ref={innerRef}
                placeholder={hint}
                enterKeyHint="next"
                readOnly = {readOnly}
                >
            </TextInput>
            
            <TouchableOpacity
            onPress={() => onIconClick()}
                >
                <Image style = {{
                    height: 25, 
                    width: 25
                        }}
                            source={{
                            uri: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678116-calendar-512.png',
                            }}/>
            </TouchableOpacity>  
            
        </Row>
    )
}



export default InputFieldWithIcon