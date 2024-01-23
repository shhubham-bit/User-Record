import { Image, TextInput } from "react-native";
import { Row } from "./LayoutComponent";


function InputField({
    id,
    value, 
    onTextChange, 
    showIcon = false, 
    iconUrl,
    ref,
    style,
    hint
}){

    const textListener = (text) => {
        console.log("bjdxbajk", text)
        onTextChange(id, text)
    }

    return(
        <Row rowStyle={{flex: 0}}>
            <TextInput 
                value={value}
                onChangeText={(e) => textListener(e)}
                ref={ref}
                placeholder={hint}
                style= {style}
                enterKeyHint="next"
                // onSubmitEditing={
                //     console.log("bjcxbajbcjka", id)
                // }
                >
            </TextInput>
            {
                showIcon && <Image>

                </Image>
            }
            
        </Row>
    )
}

export default InputField