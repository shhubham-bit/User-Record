import { Text } from "react-native";
import { Row } from "./LayoutComponent";


function TextWithLabel({labelStyle, valueStyle, label, value}){

    return(
        <Row>
            <Text style = {labelStyle}>{label} :</Text>
            <Text style = {valueStyle}>{value}</Text>
        </Row>
    )
}

export default TextWithLabel