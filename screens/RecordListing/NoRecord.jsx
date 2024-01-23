import { StyleSheet, Text, View } from "react-native";
import { Column } from "../../customComponent/LayoutComponent";
import TextButton from "../../customComponent/TextButton";


function NoRecordScreen({addCallback}){

    const addcallback = ()=> {
        addCallback()
    }

    return(
        <Column 
            justifyConteny="center" 
            alignItems="center"
            backgroundColor="#F0F4C3"
            >
            
            <Text style= {style.headerStyle}>
                No Records Found
            </Text>
            <TextButton 
                buttonStyle={style.button}
                label={"Add"}
                textStyle={style.label}
                callBack={addcallback}
            />
        </Column>
    )
}

const style = StyleSheet.create({
    button: {
        height: 50,
        width: 100,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 8
    },
    headerStyle: {
        color: 'black',
        fontSize: 20
    },
    label: {
        color: 'white',
    }
})

export default NoRecordScreen