import { Image, Text, TextInput } from "react-native";
import { Column, Row } from "./LayoutComponent";
import { useRef, useState } from "react";


function InputField({
    id,
    value, 
    onTextChange,  
    innerRef,
    style,
    hint,
    onSubmitEditing = ()=> {},
    onFocus = ()=> {},
    onBlurUpdate = ()=> {},
    focusStyle,
    errorStyle, 
    showError,
    errorText,
    inputMode = "none"
}){

    const [focusState, setFocus] = useState(false)

    const textListener = (text) => {
        console.log("bjdxbajk", text)
        onTextChange(id, text)
    }

    const focusTriggerCallback = ()=> {
        setFocus(true)
        onFocus(id)
    }

    const blurTriggerCallback = ()=> {
        setFocus(false)
        onBlurUpdate(id)
    }

    return(
        <Column flex={0}>
            <TextInput 
                value={value}
                onChangeText={(e) => textListener(e)}
                ref={innerRef}
                placeholder={hint}
                style= {[style, focusState && focusStyle, showError && errorStyle]}
                enterKeyHint="next"
                onSubmitEditing={() => {
                   onSubmitEditing()
                }}
                onFocus={focusTriggerCallback}
                onBlur={blurTriggerCallback}
                inputMode={inputMode}
                >
            </TextInput>
            { showError && <Text style = {{
                paddingHorizontal: 25, 
                marginTop: 4,
                fontSize: 12,
                color: "#B00020"
                }}>{errorText}</Text>
            }
        </Column>
    )
}

export default InputField