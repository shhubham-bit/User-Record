import { Button, ImageBackground, StyleSheet, View } from "react-native";
import { Column } from "../../customComponent/LayoutComponent";
import TextWithLabel from "../../customComponent/TextWithLabel";
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { useState } from "react";
import TextButton from "../../customComponent/TextButton";
import ImageButton from "../../customComponent/ImageButton";


function RecordItem({data,index, updateCallback, deleteCallback}){

    const [displayMenu, setMenu] = useState(false)

    const updatePress = ()=> {
        updateCallback(index)
        setMenu(false)
    }

    const deletePress = ()=> {
        deleteCallback(index)
        setMenu(false)
    }

    return(
        <Column 
            margin={4}
            padding={4}
            borderRadius={10}
            backgroundColor="white"
            borderColor = "#9CCC65"
            borderWidth = {3}
            
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
            <ImageButton
                layoutStyle={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'red',
                    margin: 10
                }}
                onPressCallback={()=> setMenu(!displayMenu)}
                buttonStyle={{
                    height: 20,
                    width: 10
                }}
                
             />
            { displayMenu &&<View style = {{
                backgroundColor: 'white', 
                flex: 0, 
                position: 'absolute',
                top: 0,
                right: 0,
                borderRadius: 10,
                marginHorizontal: 22,
                marginVertical: 4,
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 10,
                zIndex: 8,
                shadowColor: 'grey'
            }}
            > 
                <Button onPress={ updatePress}
                    title="Update"/>
                <Button onPress={deletePress}
                title="Delete"/>          
            </View>
            }
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
        fontSize: 16,
        paddingHorizontal: 14
    },
    textStyle: {
        color: 'black',
        fontSize: 18
    }
})