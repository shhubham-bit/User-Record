import { Button, StyleSheet } from "react-native";
import { Column } from "../../customComponent/LayoutComponent";
import TextWithLabel from "../../customComponent/TextWithLabel";


function RecordItem({data,index, updateCallback, deleteCallback}){

    const updatePress = ()=> {
        updateCallback(index)
    }

    const deletePress = ()=> {
        deleteCallback(index)
    }

    return(
        <Column 
            borderColor="grey"
            borderWidth={1}
            margin={4}
            padding={4}
            borderRadius={10}
            backgroundColor="orange"
            
            >
            <TextWithLabel 
                labelStyle={style.labelStyle}
                valueStyle={style.valueStyle}
                label={"Name"}
                value={data.name}
            />
            <TextWithLabel 
                labelStyle={style.labelStyle}
                valueStyle={style.valueStyle}
                label={"Phone Number"}
                value={data.phoneNumber}
            />
            <TextWithLabel 
                labelStyle={style.labelStyle}
                valueStyle={style.valueStyle}
                label={"DOB"}
                value={data.dob}
            />
            <TextWithLabel 
                labelStyle={style.labelStyle}
                valueStyle={style.valueStyle}
                label={"Email"}
                value={data.email}
            />
            <Button 
            title="update"
            onPress={updatePress}
            />
            <Button 
            title="delete"
            onPress={deletePress}
            />
        </Column>
    )
}

export default RecordItem

const style = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    labelStyle: {
        color: 'grey',
        fontSize: 12,
        paddingHorizontal: 14
    },
    textStyle: {
        color: 'black',
        fontSize: 16
    }
})